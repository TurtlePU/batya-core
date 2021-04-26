import { assert } from 'console'
import { TextEntity } from './text_entity'

export type RenderArgs = Readonly<{
    text: string,
    entities: Pick<TextEntity[], 'shift'>
}>

export class EntityRenderer {
    protected entities!: RenderArgs['entities']
    protected index = -Infinity
    protected accum: string[] = []

    constructor(readonly tree: RenderArgs) { }

    toHtml(): string {
        this.entities = this.tree.entities
        this.index = -Infinity
        this.accum = []
        assert(this.render(Infinity) === undefined, 'An entity shouldn\'t start at Infinity')
        return this.accum.join('')
    }

    protected render(end: number): TextEntity | undefined {
        let entity = this.entities.shift()
        while (entity !== undefined && entity.start < end) {
            this.move(entity.start)
            this.open(entity)
            const newEntity = this.render(entity.end)
            this.close(entity)
            entity = newEntity
        }
        this.move(end)
        return entity
    }

    protected open({ tag, attributes }: TextEntity) {
        this.accum.push(`<${[ tag, ...strings(attributes) ].join(' ')}>`)
    }

    protected move(to: number) {
        if (this.index >= to) return
        this.accum.push(this.tree.text.substring(this.index, to))
        this.index = to
    }

    protected close({ tag }: TextEntity) {
        this.accum.push(`</${tag}>`)
    }
}

export function strings(attributes: TextEntity['attributes']): string[] {
    return [ ...attributes.entries() ]
        .map(([ key, value ]) => [ key, wrapValue(value) ].join(''))
}

export function wrapValue(value?: string): string | undefined {
    return value ? `="${value}"` : undefined
}
