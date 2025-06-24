import {Attachment} from './Attachment';
import {Stadium} from './layout/Stadium';
import {User} from './User';

export class Sport{
    id: string;

    name: string;
    description: string;
    type: string;
    date: Date;
    time: Date;

    poster: Attachment;
    stadium: Stadium;
    user: User;
}
