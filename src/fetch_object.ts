export type FetchObject<T> = Readonly<{
    fetch(): Promise<Readonly<T>>
    fetch<K extends keyof T>(...args: K[]): Promise<Readonly<Pick<T, K>>>
}>
