import { assert } from 'console'
import { EntityRenderer, RenderArgs } from './entity_renderer'
import { entitiesDontCross, sanitize, sortEntities } from './entity_tree_helpers'
import { TextEntity } from './text_entity'
import { ToHtml } from './to_html'

export class EntityTree implements ToHtml, RenderArgs {
    protected readonly entt: readonly TextEntity[]

    constructor(readonly text: string, entities: TextEntity[] = []) {
        this.entt = sortEntities([ ...entities ])
        assert(entitiesDontCross(this.entt), 'Entities cross')
    }

    get entities(): TextEntity[] {
        return [ ...this.entt ]
    }

    toHtml(): string {
        return new EntityRenderer(this).toHtml()
    }
}

export class SanitizedEntityTree extends EntityTree {
    constructor(text: string, entities: TextEntity[] = []) {
        super(sanitize(text), entities)
    }
}
