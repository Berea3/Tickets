import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Theater} from "../../../entities/Theater";
import { HttpClient } from "@angular/common/http";
import {LinkService} from "../../../services/link.service";
import {HeaderComponent} from '../../header/header.component';
import {BearInputTextComponent} from 'bear-library';
import {Seating} from '../../../entities/Seating';

@Component({
  selector: 'app-add-theatre',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HeaderComponent,
        BearInputTextComponent
    ],
  templateUrl: './add-theatre.component.html',
  styleUrl: './add-theatre.component.css'
})
export class AddTheatreComponent {

    theatre: Theater=new Theater();
    seatings: Seating[];
    newFiles: File[]=[];

    constructor(private http: HttpClient, private link: LinkService) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/seating/getAll").subscribe(
            (response: any)=>{
                this.seatings=response;
            }
        );
    }

    onFileAdded(event: any)
    {
        console.log(event);
        for (let i=0;i<event.target.files.length;i++)
        {
            if (event.target.files[i].size>10000000)
            {
                console.log("files are too big");
                continue;
            }
            this.newFiles.push(event.target.files[i]);
        }
    }

    onSubmit()
    {
        this.http.post(this.link.url+"/theatres/create",this.theatre).subscribe(
            (response: any)=>{
                console.log(response);
                if (response.id==null) console.log("null id");
                else
                {
                    for (let i=0;i<this.newFiles.length;i++)
                    {
                        const formData=new FormData();
                        formData.append('file',this.newFiles[i]);
                        this.http.post(this.link.url+'/theatres/create/file/'+response.id,formData).subscribe();
                    }
                }
            }
        );
    }
}
