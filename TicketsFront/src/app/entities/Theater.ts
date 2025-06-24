import {Attachment} from "./Attachment";
import {Seating} from './layout/Seating';

export class Theater {
    id: string;

    name: string;
    description: string;
    date: Date;
    time: Date;

    poster: Attachment;
    seating: Seating;
}
