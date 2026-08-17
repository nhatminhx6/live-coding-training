import { easyQuestions } from './easy'
import { mediumQuestions } from './medium'
import { hardQuestions } from './hard'
import type { Question } from '../../types'

export const questions: Question[] = [
    ...easyQuestions,
    ...mediumQuestions,
    ...hardQuestions,
] as Question[]
