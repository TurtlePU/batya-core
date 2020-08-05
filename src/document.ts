import { Attachment } from 'attachment'
import { QueryObject } from 'query_object'

export type Bounds = Readonly<Record<'offset' | 'limit', number>>

export type DocumentData = {
    type: 'image' | 'audio' | 'video' | 'gif' | 'unknown'
    compressed: boolean
    filename?: string
    caption?: string
}

export abstract class Document<T extends DocumentData = DocumentData> extends Attachment
    implements QueryObject<T> {

    bytes({ offset = 0, limit = Infinity }: Partial<Bounds> = { }) {
        return this.download(offset, limit)
    }

    abstract query(): Promise<Readonly<T>>
    abstract query<K extends keyof T>(...args: K[]): Promise<Pick<Readonly<T>, K>>

    protected abstract download(offset: number, limit: number): Promise<Uint8Array>
}
