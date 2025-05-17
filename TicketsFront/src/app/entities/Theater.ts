import {Attachment} from "./Attachment";
import {Seating} from './Seating';

export class Theater {
    id: number;

    name: string;
    description: string;
    date: Date;
    time: Date;

    poster: Attachment;
    seating: Seating;
}
