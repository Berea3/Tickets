import { Component } from '@angular/core';
import {Theater} from '../../../../entities/Theater';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../../services/link.service';
import {Router} from '@angular/router';
import {HeaderComponent} from '../../../header/header.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-theaters-page',
    imports: [
        HeaderComponent,
        NgIf
    ],
  templateUrl: './theaters-page.component.html',
  styleUrl: './theaters-page.component.css'
})
export class TheatersPageComponent {

    theaters: Theater[];    // will change to event

    constructor(private http: HttpClient, protected link: LinkService, private router: Router) {
    }

    ngOnInit()
    {
        this.http.get(this.link.url+"/theaters/getAll").subscribe(
            (data: any)=>{
                this.theaters=data;
                console.log(data);
            }
        )
    }

    openTheatre(id: string)
    {
        this.router.navigateByUrl("/events/theatres/"+id);
    }
}
