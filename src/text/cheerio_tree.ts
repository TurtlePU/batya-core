import { load } from 'cheerio'
import { ToHtml } from './to_html'

export class CheerioTree implements ToHtml {
    constructor(readonly $: CheerioStatic) { }

    toHtml(): string {
        return <string> this.$('body').html()
    }
}

export class LoadingCheerioTree extends CheerioTree {
    constructor(src: string) {
        super(load(src))
    }
}
