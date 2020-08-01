import { load } from 'cheerio'
import { ToHtml } from './to_html'

export class CheerioTree implements ToHtml {
    constructor(readonly $: CheerioStatic) { }

    toHtml(): string {
        const result = this.$('body').html()
        if (result === null) {
            throw 'Failed to render'
        }
        return result
    }
}

export class LoadingCheerioTree extends CheerioTree {
    constructor(src: string) {
        super(load(src))
    }
}
