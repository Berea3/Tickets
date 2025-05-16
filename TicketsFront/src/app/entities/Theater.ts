import {Attachment} from "./Attachment";
import {Time} from '@angular/common';
import {Timestamp} from 'rxjs';

export class Theater {
    id: number;

    name: string;
    description: string;
    date: Date;
    time: Date;

    attachments: Attachment[]=[];
}
