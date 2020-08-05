import { Attachment } from 'attachment'
import { Origin } from 'origin'
import { CheerioTree, LoadingCheerioTree } from './cheerio_tree'
import { ToHtml } from './to_html'

export abstract class Text extends Attachment {
    readonly html: string

    constructor(origin: Origin, html: ToHtml) {
        super(origin)
        this.html = html.toHtml()
    }

    tree(): CheerioTree {
        return new LoadingCheerioTree(this.html)
    }
}
