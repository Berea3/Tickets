import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Theatre} from "../../events/Theatre";
import {LinkService} from "../../link.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-theatre-view',
  standalone: true,
  imports: [],
  templateUrl: './theatre-view.component.html',
  styleUrl: './theatre-view.component.css'
})
export class TheatreViewComponent {

    theatre: Theatre=new Theatre();

    constructor(private http: HttpClient, private link: LinkService, private route: ActivatedRoute) {
    }

    ngOnInit()
    {
        console.log(this.route.snapshot.params['id']);
        this.http.get(this.link.url+"/theatres/getById/"+this.route.snapshot.params['id']).subscribe(
            (data: any)=>{
                console.log(data);
                this.theatre=data;
            }
        )
    }

    download(id:number)
    {
        return this.http.get(this.link.url+'/theatres/read/attachment/'+id,{responseType:'blob'});
    }

    displayFile(file: any)
    {
        const fileURL=URL.createObjectURL(file);
        window.open(fileURL);
    }

    onDownloadFile(id: number)
    {
        console.log("file downloading");
        this.download(id).subscribe(
            (response)=>{
                this.displayFile(response);
            }
        )
    }
}
