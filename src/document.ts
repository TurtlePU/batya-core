import { Attachment } from 'attachment'

export type Bounds = Readonly<Record<'offset' | 'limit', number>>

export type Document = Readonly<{
    type: 'image' | 'audio' | 'video' | 'gif' | 'unknown'
    compressed: boolean
    filename?: string
    caption?: string
    download(offset: number, limit: number): Promise<Uint8Array>
}>

export abstract class DocumentHolder extends Attachment {
    constructor(readonly document: Document) {
        super()
    }

    bytes({ offset = 0, limit = Infinity }: Partial<Bounds> = { }): Promise<Uint8Array> {
        return this.document.download(offset, limit)
    }
}
