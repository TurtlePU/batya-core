export type FetchObject<T> = Readonly<{
    fetch<K extends keyof T>(...args: K[]): Promise<Readonly<Pick<T, K>>>
}>
