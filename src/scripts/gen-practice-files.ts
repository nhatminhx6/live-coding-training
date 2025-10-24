import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { questions } from '../data/questions'

type Question = {
    slug: string
    title: string
    difficulty: 'easy' | 'medium' | 'hard'
    description?: string
    examples?: string[]
    functionSignature: string
    starterCode: string
    testCases?: { input: any[]; output: any }[]
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ---- CLI flags ----
const argv = process.argv.slice(2)
const FORCE = argv.includes('--force')
const onlyArg = argv.find((a) => a.startsWith('--only='))
const ONLY: 'easy' | 'medium' | 'hard' | undefined = onlyArg
    ? (onlyArg.split('=')[1] as any)
    : undefined

const slugArg = argv.find((a) => a.startsWith('--slug='))
const ONLY_SLUG = slugArg ? slugArg.split('=')[1] : undefined

// ---- Paths ----
const practiceDir = path.join(__dirname, '../practice')
if (!fs.existsSync(practiceDir)) {
    fs.mkdirSync(practiceDir, { recursive: true })
}

// ---- Helpers ----
function sanitizeFilename(s: string): string {
    return s.replace(/[^\w\-]/g, '_')
}

function parseSignature(sig: string): { name: string; params: string } {
    // e.g. "function twoSum(nums, target) {}"
    const m = sig.match(/function\s+(\w+)\s*\(([^)]*)\)/)
    const name = m?.[1] || 'solution'
    // Keep original param names but make them type any
    const paramsRaw = (m?.[2] || '').trim()
    const params =
        paramsRaw.length === 0
            ? ''
            : paramsRaw
                .split(',')
                .map((p) => p.trim())
                .filter(Boolean)
                .map((p) => {
                    // strip default values and type annotations if any
                    const [id] = p.split('=')
                    const clean = id.replace(/:.*$/, '').trim()
                    return `${clean}: any`
                })
                .join(', ')
    return { name, params }
}

function buildFileContent(q: Question): string {
    const { name, params } = parseSignature(q.functionSignature)
    const examples =
        q.examples && q.examples.length
            ? q.examples.map((e) => `// ${e}`).join('\n')
            : '// (no example)'
    const description = q.description ? q.description : '(no description)'

    return `// 🧠 ${q.title}
// Difficulty: ${q.difficulty}
// ---------------------------------------------
// ${description}
// ---------------------------------------------
// Examples:
// ${examples}

export default function ${name}(${params}) {
  // TODO: Implement your solution here
  // You can run this via your UI "Run" button (it will import ${q.slug}.ts)
  return null
}
`
}

function shouldInclude(q: Question): boolean {
    if (ONLY && q.difficulty !== ONLY) return false
    if (ONLY_SLUG && q.slug !== ONLY_SLUG) return false
    return true
}

// ---- Main ----
let created = 0
let skipped = 0
let overwritten = 0

;(questions as Question[]).forEach((q) => {
    if (!shouldInclude(q)) return

    const filename = `${sanitizeFilename(q.slug)}.ts`
    const filePath = path.join(practiceDir, filename)
    const content = buildFileContent(q)

    if (fs.existsSync(filePath)) {
        if (FORCE) {
            fs.writeFileSync(filePath, content, 'utf8')
            console.log(`♻️  Overwritten: ${filename}`)
            overwritten++
        } else {
            console.log(`⚠️  Skipped (exists): ${filename}  — add --force to overwrite`)
            skipped++
        }
    } else {
        fs.writeFileSync(filePath, content, 'utf8')
        console.log(`✅ Created: ${filename}`)
        created++
    }
})

console.log(
    `\n✨ Done! Created: ${created} • Overwritten: ${overwritten} • Skipped: ${skipped}${
        ONLY ? ` • Filter(difficulty): ${ONLY}` : ''
    }${ONLY_SLUG ? ` • Filter(slug): ${ONLY_SLUG}` : ''}`
)
