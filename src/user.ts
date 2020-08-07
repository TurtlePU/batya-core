import { Document } from 'document'
import { Locale } from 'locale'
import { FetchObject } from 'fetch_object'
import { URL } from 'url'

export type User = FetchObject<{
    locale?: Locale
    isBot: boolean
    shortName: string
    fullName: string
    avatar?: Document
    profile?: URL
}>
