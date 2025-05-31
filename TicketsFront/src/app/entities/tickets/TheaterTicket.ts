import {User} from '../User';
import {Theater} from '../Theater';

export class TheaterTicket{
    id: string;

    row: number;
    position: number;

    user: User;
    theater: Theater;
}
