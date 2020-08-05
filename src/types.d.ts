export type Class<T, A extends any[] = any[]> = {
    new(...args: A): T
}

export type ConsParams<C> = C extends Class<any, infer P> ? P : never
