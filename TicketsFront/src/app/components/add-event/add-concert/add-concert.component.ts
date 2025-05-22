import { Component } from '@angular/core';
import {Concert} from '../../../entities/Concert';
import {Seating} from '../../../entities/Seating';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../services/link.service';
import {BearInputTextComponent} from 'bear-library';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-add-concert',
    imports: [
        BearInputTextComponent,
        FormsModule,
        HeaderComponent,
        ReactiveFormsModule
    ],
  templateUrl: './add-concert.component.html',
  styleUrl: './add-concert.component.css'
})
export class AddConcertComponent {

    concert: Concert=new Concert();
    seatings: Seating[];
    newFile: File;
    seatingId: string;

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
        this.newFile=event.target.files[0];
    }

    onSubmit()
    {
        const newSeating=this.seatings.find((seating)=>seating.id===this.seatingId);
        if (newSeating==undefined) this.concert.seating=new Seating();
        else this.concert.seating=newSeating;
        this.http.post(this.link.url+"/concerts/create",this.concert).subscribe(
            (response: any)=>{
                if (response.id==null) console.log("null id");
                else
                {
                    const formData=new FormData();
                    formData.append('file',this.newFile);
                    this.http.post(this.link.url+"/concerts/setFile"+response.id,formData).subscribe();
                }
            }
        )
    }

    setName(name: string)
    {
        this.concert.name=name;
    }

    setDescription(description: string)
    {
        this.concert.description=description;
    }
}
