export type Class<T, A extends any[] = any[]> = {
    new(...args: A): T
}

export type ConsParams<C> = C extends Class<any, infer P> ? P : never

export type Getters<T> = {
    [K in keyof T]: () => T[K]
}

export type Promisify<T> = {
    [K in keyof T]: Promise<T[K]>
}
