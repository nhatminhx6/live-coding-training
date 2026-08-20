import { easyQuestions } from './easy'
import { mediumQuestions } from './medium'
import { hardQuestions } from './hard'
import type { Question } from '../../types'

export const questions: Question[] = [
    ...easyQuestions,
    ...mediumQuestions,
    ...hardQuestions,
] as Question[]

// Content invariant: mọi bài tập phải có bài giải code để mở xem.
for (const question of questions) {
    if (!question.starterCode.trim()) {
        throw new Error(`Practice "${question.slug}" phải có bài giải code`)
    }
}
