import {User} from '../User';
import {Concert} from '../Concert';

export class ConcertTicket{
    id: string;
    price: number;

    user: User;
    concert: Concert;
}
