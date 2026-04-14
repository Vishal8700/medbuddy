'use client'

import { ReactNode } from 'react'
import { pyqTest } from './Test-series-1'
import { pyqTest2024 } from './Test-series-2'
import { pyqTest as pyqTest3 } from './Test-series-3'
import { englishTest } from './English-series-1'
import type { Question } from './Test-series-1'

export type { Question }

export interface TestSeries {
  id: string
  name: string
  description: string
  questions: Question[]
  icon: string
}

export const testSeriesList: TestSeries[] = [
  {
    id: 'test-series-1',
    name: 'Test Series 1',
    description: 'Full MDCAT mock — Biology, Chemistry, Physics, English & Logical Reasoning',
    questions: pyqTest,
    icon: 'clipboard',
  },
  {
    id: 'test-series-2',
    name: 'Test Series 2',
    description: 'PYQ 2024 full mock — Biology, Chemistry, Physics, English & Logical Reasoning',
    questions: pyqTest2024,
    icon: 'clipboard',
  },
  {
    id: 'test-series-3',
    name: 'Test Series 3',
    description: 'Full MDCAT mock — Physics, Chemistry, English & Biology mixed practice series',
    questions: pyqTest3,
    icon: 'clipboard',
  },
  {
    id: 'english-series-1',
    name: 'English Series 1',
    description: 'Focused English practice — grammar, vocabulary and comprehension',
    questions: englishTest,
    icon: 'clipboard',
  },
]

// 1 minute per question
export function getTestDuration(questionCount: number): string {
  const hours = Math.floor(questionCount / 60)
  const mins = questionCount % 60
  if (hours === 0) return `${mins} min`
  if (mins === 0) return `${hours} hr`
  return `${hours} hr ${mins} min`
}
