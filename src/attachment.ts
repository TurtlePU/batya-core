import { Nativity } from 'nativity'
import { Origin } from 'origin'

export abstract class Attachment implements Nativity {
    constructor(readonly origin: Origin) { }
    abstract native(): unknown
}
