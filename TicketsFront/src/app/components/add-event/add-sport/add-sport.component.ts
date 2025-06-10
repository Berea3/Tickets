import { Component } from '@angular/core';
import {Sport} from '../../../entities/Sport';
import {Stadium} from '../../../entities/layout/Stadium';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../services/link.service';
import {Router} from '@angular/router';
import {BearInputTextComponent} from 'bear-library';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from '../../header/header.component';
import {Seating} from '../../../entities/layout/Seating';

@Component({
  selector: 'app-add-sport',
    imports: [
        BearInputTextComponent,
        FormsModule,
        HeaderComponent,
        ReactiveFormsModule
    ],
  templateUrl: './add-sport.component.html',
  styleUrl: './add-sport.component.css'
})
export class AddSportComponent {
    sport: Sport=new Sport();
    stadiums: Stadium[];
    newFile: File;
    stadiumId: string;

    constructor(private http: HttpClient, private link: LinkService, private router: Router) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/stadiums/getAll").subscribe(
            (response: any)=>{
                this.stadiums=response;
            }
        )
    }

    onSubmit()
    {
        const newStadium=this.stadiums.find((stadium)=>stadium.id===this.stadiumId);
        if (newStadium==undefined) this.sport.stadium=new Stadium();
        else this.sport.stadium=newStadium;
        this.http.post(this.link.url+"/theaters/create",this.sport).subscribe(
            (response: any)=>{
                console.log(response);
                if (response.id==null) console.log("null id");
                else
                {
                    const formData=new FormData();
                    formData.append('file',this.newFile);
                    this.http.post(this.link.url+'/theaters/setFile/'+response.id,formData).subscribe();
                }
            }
        );
    }

    onFileAdded(event: any)
    {
        this.newFile=event.target.files[0];
    }


    setName(name: string)
    {
        this.sport.name=name;
    }

    setDescription(description: string)
    {
        this.sport.description=description;
    }
}
