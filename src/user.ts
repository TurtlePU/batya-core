import { Document } from 'document'
import { Locale } from 'locale'
import { Getters, Promisify } from 'types'
import { URL } from 'url'
import { Nativity } from 'nativity'

export type User = Nativity & Readonly<{
    locale: Locale | null
    isBot: boolean
} & Getters<Promisify<{
    shortName: string
    fullName: string
    avatar: Document | null
    profile: URL | null
}>>>
