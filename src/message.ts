import { Attachment } from 'attachment'
import { Chat } from 'chat'
import { Event } from 'event'
import { User } from 'user'
import { Nativity } from 'nativity'

export type Message = Nativity & Readonly<{
    sender?: User
    when: Date
    lastEdit?: Date
    chat: Chat
    content: readonly Attachment[]
    event?: Event
}>
