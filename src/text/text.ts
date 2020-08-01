import { Attachment } from 'attachment'
import { CheerioTree, LoadingCheerioTree } from './cheerio_tree'
import { ToHtml } from './to_html'

export abstract class Text extends Attachment {
    readonly html: string

    constructor(proto: ToHtml) {
        super()
        this.html = proto.toHtml()
    }

    tree(): CheerioTree {
        return new LoadingCheerioTree(this.html)
    }
}
