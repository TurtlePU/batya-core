import { Origin } from 'origin'

export type Nativity = Readonly<{
    origin: Origin;
    native(): unknown;
}>
