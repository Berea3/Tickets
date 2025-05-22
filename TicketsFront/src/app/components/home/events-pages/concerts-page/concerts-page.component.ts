import { Component } from '@angular/core';
import {Concert} from '../../../../entities/Concert';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../../services/link.service';
import {HeaderComponent} from '../../../header/header.component';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-concerts-page',
    imports: [
        HeaderComponent,
        NgIf
    ],
  templateUrl: './concerts-page.component.html',
  styleUrl: './concerts-page.component.css'
})
export class ConcertsPageComponent {
    concerts: Concert[];

    constructor(private http: HttpClient, protected link: LinkService, private router: Router) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/concerts/getAll").subscribe(
            (response: any)=>{
                this.concerts=response;
            }
        );
    }

    openConcert(id: string)
    {
        this.router.navigateByUrl("/concerts/"+id);
    }
}
