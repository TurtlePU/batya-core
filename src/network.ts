import { Message } from 'message'
import { Origin } from 'origin'

export type NetworkListener = (message: Message) => Promise<void>

export type Network = Origin & {
    setup(): Promise<void>
    send(message: Message): void
    subscribe(listener: NetworkListener): void
    unsubscribe(listener: NetworkListener): void
}
