import { easyQuestions } from './easy'
import { mediumQuestions } from './medium'
import { hardQuestions } from './hard'
import type { Question } from '../../types'
import { alternativeSolutions } from './alternativeSolutions'

export const questions: Question[] = [
    ...easyQuestions,
    ...mediumQuestions,
    ...hardQuestions,
] as Question[]

// Content invariant: mọi bài luôn có 2 cách; cách 1 ưu tiên giải thuật.
for (const question of questions) {
    if (!question.starterCode.trim()) {
        throw new Error(`Practice "${question.slug}" phải có bài giải code`)
    }
    if (!question.arrayFunctionCode?.trim() && !alternativeSolutions[question.slug]?.trim()) {
        throw new Error(`Practice "${question.slug}" phải có cách giải thứ 2`)
    }
}
