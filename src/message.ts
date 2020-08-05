import { Attachment } from 'attachment'
import { Chat } from 'chat'
import { Event } from 'event'
import { User } from 'user'
import { QueryObject } from 'query_object'

export type Message = QueryObject<{
    sender?: User
    when: Date
    lastEdit?: Date
    chat: Chat
    content: readonly Attachment[]
    event?: Event
}>
