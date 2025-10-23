import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { questions } from '../data/questions.js' // ✅ đúng đường dẫn thật trong project

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ✅ Tạo folder practice trong src nếu chưa có
const practiceDir = path.join(__dirname, '../practice')
if (!fs.existsSync(practiceDir)) {
    fs.mkdirSync(practiceDir, { recursive: true })
}

questions.forEach((q) => {
    const filePath = path.join(practiceDir, `${q.slug}.ts`)

    if (fs.existsSync(filePath)) {
        console.log(`⚠️  Skipped: ${q.slug}.ts (already exists)`)
        return
    }

    const funcName = q.functionSignature.match(/function\s+(\w+)/)?.[1] || 'solution'

    const content = `// 🧠 ${q.title}
// Difficulty: ${q.difficulty}
// ${q.description}
//
// Example:
// ${q.examples?.join('\n// ') || ''}

export default function ${funcName}(...args: any[]): any {
  // TODO: Implement your solution here
  console.log('Running ${funcName} with args:', args)
  return null
}
`

    fs.writeFileSync(filePath, content)
    console.log(`✅ Created: ${q.slug}.ts`)
})

console.log('\n✨ Done generating practice files!')
