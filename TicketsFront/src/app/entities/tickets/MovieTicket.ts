import {User} from '../User';
import {Movie} from '../Movie';

export class MovieTicket{
    id: string;

    row: number;
    position: number;

    user: User;
    movie: Movie;
}
