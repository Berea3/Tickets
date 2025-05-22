import {Attachment} from './Attachment';
import {Seating} from './Seating';

export class Concert{
    id: string;

    name: string;
    description: string;
    date: Date;
    time: Date;

    poster: Attachment;
    seating: Seating;
}
