import {Attachment} from "../../entities/Attachment";

export class Theatre{
    id: number;

    name: string;
    places: number;

    attachments: Attachment[]=[];
}
