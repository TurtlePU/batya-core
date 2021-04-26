import { FetchObject } from 'fetch_object'

export type Fetcher<T, J extends keyof T, K extends keyof T> = {
    required: J[]
    provides: K[]
    fetch(this: Pick<T, J>): void
}

export class GraphFetchObject<T> implements FetchObject<T> {
    constructor(protected readonly fetchers: any[]) { }
    fetch<K extends keyof T>(...args: K[]): Promise<Readonly<Pick<T, K>>> {
        throw new Error('Method not implemented.')
    }
}

class MissingFetcher extends Error {
    constructor(key: any) {
        super(`Missing fetcher for: ${key}`)
    }
}

function throws<T>(err: Error): T {
    throw err
}
