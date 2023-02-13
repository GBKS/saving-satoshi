'use client'

import { useTranslations } from 'hooks'
import { useState } from 'react'
import {
  StatusBar,
  Button,
  Lesson,
  LessonInfo,
  LessonTabs,
  Title,
  Text,
  LessonPrompt,
} from 'ui'

const inputAmount = 154
const answer =
  '04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73'

const tabData = [
  {
    id: 'info',
    text: 'Info',
  },
  {
    id: 'code',
    text: 'Code',
  },
]

export default function Genesis1({ lang }) {
  const t = useTranslations(lang)

  const [userInput, setUserInput] = useState('')

  return (
    <Lesson>
      <LessonTabs items={tabData} classes="px-4 py-2 w-full" stretch={true} />

      <LessonInfo>
        <Title>{t('genesis_one.heading')}</Title>

        <Text className="text-lg">{t('genesis_one.paragraph_one')}</Text>
        <Text className="text-lg">{t('genesis_one.paragraph_two')}</Text>

        <Button
          href="https://blockstream.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
          external={true}
          classes="mt-4"
        >
          {t('genesis_one.view_block_0')}
        </Button>
      </LessonInfo>

      <hr className="border-1 invisible h-1 w-full border-white/25 md:visible" />

      <LessonPrompt
        className="max-w-[840px] px-4 py-8 md:items-center"
        label={t('genesis_one.placeholder')}
        amount={inputAmount}
        onChange={setUserInput}
      />

      <StatusBar
        full
        next="/chapters/chapter-1/genesis-2"
        input={userInput}
        expected={answer}
      />
    </Lesson>
  )
}

export const metadata = {
  title: 'genesis_one.title',
}
