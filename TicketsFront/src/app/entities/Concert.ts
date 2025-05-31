import {Attachment} from './Attachment';
import {User} from './User';

export class Concert{
    id: string;

    name: string;
    description: string;
    date: Date;
    time: Date;
    seats: number;
    availableSeats: number;
    price: number;

    poster: Attachment;
    user: User;
}
