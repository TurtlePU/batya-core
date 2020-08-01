import { Nativity } from 'nativity'

export abstract class Event implements Nativity {
    abstract native(): unknown
}
