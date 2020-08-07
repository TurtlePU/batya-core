import { Attachment } from 'attachment'
import { FetchObject } from 'fetch_object'
import { Origin } from 'origin'

export type Bounds = Readonly<Record<'offset' | 'limit', number>>

export type DocumentData = {
    type: 'image' | 'audio' | 'video' | 'gif' | 'unknown'
    compressed: boolean
    filename?: string
    caption?: string
}

export type DocumentFetcher<T> = FetchObject<T> & {
    download(offset: number, limit: number): Promise<Uint8Array>
}

export abstract class Document<T extends DocumentData = DocumentData> extends Attachment {
    constructor(origin: Origin, readonly fetcher: DocumentFetcher<T>) {
        super(origin)
    }

    bytes({ offset = 0, limit = Infinity }: Partial<Bounds> = { }) {
        return this.fetcher.download(offset, limit)
    }
}
