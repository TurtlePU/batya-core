export type TextEntity = Readonly<{
    start: number
    end: number
    tag: string
    attributes: Pick<Map<string, string | undefined>, 'entries'>
}>
