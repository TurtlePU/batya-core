import { TextEntity } from './text_entity'
import sanitizeHtml from 'sanitize-html'

export function sortEntities(entities: TextEntity[]): TextEntity[] {
    return entities.sort((
        { start: startA, end: endA },
        { start: startB, end: endB },
    ) => {
        return startA === startB ? endB - endA : startA - startB
    })
}

export function entitiesDontCross(entities: readonly TextEntity[]): boolean {
    return entities.reduce(
        ({ res, prev }, { end }) => ({ res: res && prev <= end, prev: end }),
        { res: true, prev: -Infinity },
    ).res
}

export function sanitize(html: string): string {
    return sanitizeHtml(html, {
        allowedTags: [],
        allowedAttributes: {},
        disallowedTagsMode: 'escape',
    })
}
