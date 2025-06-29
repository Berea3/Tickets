import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Theater} from "../../../entities/Theater";
import { HttpClient } from "@angular/common/http";
import {LinkService} from "../../../services/link.service";
import {HeaderComponent} from '../../header/header.component';
import {BearInputTextComponent} from 'bear-library';
import {Seating} from '../../../entities/layout/Seating';
import {Router} from '@angular/router';

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
    newFile: File;
    seatingId: string;

    constructor(private http: HttpClient, private link: LinkService, private router: Router) {}

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
        // console.log(event);
        // for (let i=0;i<event.target.files.length;i++)
        // {
        //     if (event.target.files[i].size>10000000)
        //     {
        //         console.log("files are too big");
        //         continue;
        //     }
        //     this.newFiles.push(event.target.files[i]);
        // }
        this.newFile=event.target.files[0];
    }

    onSubmit()
    {
        const newSeating=this.seatings.find((seating)=>seating.id===this.seatingId);
        if (newSeating==undefined) this.theatre.seating=new Seating();
        else this.theatre.seating=newSeating;
        this.http.post(this.link.url+"/theaters/create",this.theatre).subscribe(
            (response: any)=>{
                console.log(response);
                if (response.id==null) console.log("null id");
                else
                {
                    const formData=new FormData();
                    formData.append('file',this.newFile);
                    this.http.post(this.link.url+'/theaters/setFile/'+response.id,formData).subscribe(
                        (response: any)=>{
                            this.router.navigateByUrl("/manage");
                        }
                    );
                }
            }
        );
    }

    setName(name: string)
    {
        this.theatre.name=name;
    }

    setDescription(description: string)
    {
        this.theatre.description=description;
    }

}
