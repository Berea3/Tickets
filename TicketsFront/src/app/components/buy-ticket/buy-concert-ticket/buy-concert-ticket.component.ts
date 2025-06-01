import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../services/link.service';
import {ActivatedRoute} from '@angular/router';
import {Concert} from '../../../entities/Concert';
import {BearBtnComponent} from 'bear-library';
import {HeaderComponent} from '../../header/header.component';
import {ConcertTicket} from '../../../entities/tickets/ConcertTicket';

@Component({
  selector: 'app-buy-concert-ticket',
    imports: [
        BearBtnComponent,
        HeaderComponent
    ],
  templateUrl: './buy-concert-ticket.component.html',
  styleUrl: './buy-concert-ticket.component.css'
})
export class BuyConcertTicketComponent {
    concert: Concert=new Concert();
    concertTicket: ConcertTicket=new ConcertTicket();

    constructor(private http: HttpClient, private link: LinkService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit()
    {
        this.http.get(this.link.url+"/concerts/getById/"+this.activatedRoute.snapshot.params['id']).subscribe(
            (response: any)=>{
                this.concert=response;
            }
        )
    }

    buyTicket()
    {
        this.http.post(this.link.url+"/concerts/buy/"+this.activatedRoute.snapshot.params['id'], this.concertTicket).subscribe();
    }

}
