import {Attachment} from "./Attachment";

export class Theater {
    id: number;

    name: string;
    description: string;
    date: Date;
    time: Date;

    attachments: Attachment[]=[];
}
