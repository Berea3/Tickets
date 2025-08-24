import { Component } from '@angular/core';
import {Sport} from '../../../../entities/Sport';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../../services/link.service';
import {HeaderComponent} from '../../../header/header.component';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sports-page',
    imports: [
        HeaderComponent,
        NgIf
    ],
  templateUrl: './sports-page.component.html',
  styleUrl: './sports-page.component.css'
})
export class SportsPageComponent {

    sports: Sport[];

    constructor(private http: HttpClient, protected link: LinkService, private router: Router) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/sports/getAll").subscribe(
            (response: any)=>{
                this.sports=response;
            }
        )
    }

    goToBuyTicket(id: string)
    {
        this.router.navigateByUrl("/buy/sports/"+id);
    }

}
