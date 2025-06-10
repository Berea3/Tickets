import { Component } from '@angular/core';
import {Theater} from '../../../entities/Theater';
import {Seating} from '../../../entities/layout/Seating';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../services/link.service';
import {Movie} from '../../../entities/Movie';
import {BearInputTextComponent} from 'bear-library';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-add-movie',
    imports: [
        BearInputTextComponent,
        FormsModule,
        HeaderComponent,
        ReactiveFormsModule
    ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent {

    movie: Movie=new Movie();
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
        if (newSeating==undefined) this.movie.seating=new Seating();
        else this.movie.seating=newSeating;
        this.http.post(this.link.url+"/movies/create",this.movie).subscribe(
            (response: any)=>{
                console.log(response);
                if (response.id==null) console.log("null id");
                else
                {
                    const formData=new FormData();
                    formData.append('file',this.newFile);
                    this.http.post(this.link.url+'/movies/setFile/'+response.id,formData).subscribe();
                }
            }
        );
    }

    setName(name: string)
    {
        this.movie.name=name;
    }

    setDescription(description: string)
    {
        this.movie.description=description;
    }
}
