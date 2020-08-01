import { Nativity } from 'nativity'

export abstract class Attachment implements Nativity {
    abstract native(): unknown
}
