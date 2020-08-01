import { Message } from 'message'

export type NetworkListener = (message: Message) => void

export type Network = {
    setup(): Promise<void>
    send(message: Message): void
    subscribe(listener: NetworkListener): void
    unsubscribe(listener: NetworkListener): void
}
