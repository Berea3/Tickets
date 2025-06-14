import {User} from '../User';
import {Sport} from '../Sport';

export class SportTicket{
    id: string;

    row: number;
    position: number;
    stadiumSection: string;

    user: User;
    sport: Sport;
}
