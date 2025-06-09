import {StadiumSection} from './StadiumSection';
import {User} from '../User';

export class Stadium{
    id: string;

    name: string;
    free: boolean;

    stadiumSections: StadiumSection[]=[];
    user: User;
}
