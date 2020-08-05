import { Origin } from 'origin'

export type Nativity = Readonly<{
    origin: Origin
    native(): unknown
}>

export type QueryObject<T> = Nativity & Readonly<{
    query(): Promise<Readonly<T>>
    query<K extends keyof T>(...args: K[]): Promise<Pick<Readonly<T>, K>>
}>
