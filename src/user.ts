import { Document } from 'document'
import { Locale } from 'locale'
import { QueryObject } from 'query_object'
import { URL } from 'url'

export type User = QueryObject<{
    locale?: Locale
    isBot: boolean
    shortName: string
    fullName: string
    avatar?: Document
    profile?: URL
}>
