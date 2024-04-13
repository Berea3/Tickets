import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Theatre} from "../events/Theatre";
import {LinkService} from "../link.service";

@Component({
  selector: 'app-add-event',
  standalone: true,
    imports: [
        HeaderComponent,
        FormsModule
    ],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

    theatre: Theatre=new Theatre();
    newFiles: File[]=[];

    constructor(private http: HttpClient, private link: LinkService) {}

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
