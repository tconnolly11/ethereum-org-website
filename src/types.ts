import { IGatsbyImageData } from "gatsby-plugin-image"

import type { Messages } from "./interfaces"
import type { Lang } from "./utils/languages"
import { TranslationKey } from "./utils/translations"

export type Intl = {
  language: Lang
  languages: Array<Lang>
  defaultLanguage: Lang
  messages: Messages
  routed: boolean
  originalPath: string
  redirect: boolean
}

export type I18NextContext = {
  language: string
  routed: boolean
  languages: string[]
  defaultLanguage: string
  generateDefaultLanguagePage: boolean
  originalPath: string
  path: string
  siteUrl?: string
}

export type Context = {
  slug: string
  relativePath?: string
  language: Lang
  languagesToFetch?: Array<Lang>
  ignoreTranslationBanner?: boolean
  isOutdated: boolean
  isLegal?: boolean
  isDefaultLang?: boolean
  isContentEnglish?: boolean
  i18n: I18NextContext
}

export interface DeveloperDocsLink {
  id: TranslationKey
  to: string
  path: string
  description: TranslationKey
  items: Array<DeveloperDocsLink>
}

export type Direction = "rtl" | "ltr" | "auto"

export type ForbidOptional<T = {}> = {
  [P in keyof T]?: never
}

type OptionalImageProp = {
  image: IGatsbyImageData
  alt: string
}

type ForbidOptionalImageProp = ForbidOptional<OptionalImageProp>

export type ImageProp = OptionalImageProp | ForbidOptionalImageProp

export interface LearningTool {
  name: string
  description: TranslationKey
  url: string
  image: IGatsbyImageData | string
  alt: TranslationKey
  background: string
  subjects: Array<string>
  locales?: Array<Lang>
}

export interface LearningToolsCardGridProps {
  category: Array<LearningTool>
}

/**
 * Quiz data types
 */
export interface AnswerChoice {
  answerId: string
  isCorrect: boolean
}

export interface Answer {
  id: string
  label: string
  explanation: string
  moreInfoLabel?: string
  moreInfoUrl?: string
}

export interface RawQuestion {
  prompt: string
  answers: Array<Answer>
  correctAnswerId: string
}

export interface Question extends RawQuestion {
  id: string
}

export interface QuestionBank {
  [key: string]: RawQuestion
}

export interface RawQuiz {
  title: string
  questions: Array<string> // TODO: Force to be an array of questionID's
}

export interface Quiz {
  title: string
  questions: Array<Question>
}

export interface RawQuizzes {
  [key: string]: RawQuiz
}
