import { Attachment } from 'attachment'
import { Chat } from 'chat'
import { Event } from 'event'
import { User } from 'user'
import { FetchObject } from 'fetch_object'

export type Message = FetchObject<{
    sender?: User
    when: Date
    lastEdit?: Date
    chat: Chat
    content: readonly Attachment[]
    event?: Event
}>
