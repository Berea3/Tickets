import { Component } from '@angular/core';
import {HeaderComponent} from '../../../header/header.component';
import {TranslateService} from '../../../../services/translate.service';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../../services/link.service';
import {TicketDto} from '../../../../dtos/TicketDto';
import {raceWith} from 'rxjs';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-profile',
    imports: [
        HeaderComponent,
        NgForOf
    ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

    tickets: TicketDto[];

    constructor(private translate: TranslateService, private http: HttpClient, private link: LinkService) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/spectator/getTickets").subscribe(
            (response: any)=>{
                this.tickets=response;
            }
        )
    }

    changeLanguage(lang: 'en'|'ro')
    {
        this.translate.changeLanguage(lang);
    }

}
