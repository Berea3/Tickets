import { Component } from '@angular/core';
import {TicketDto} from '../../../../dtos/TicketDto';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../../services/link.service';
import {HeaderComponent} from '../../../header/header.component';
import {NgForOf} from '@angular/common';
import {BearBtnComponent, BearInputCheckboxComponent, BearInputTextComponent} from 'bear-library';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-check-ticket',
    imports: [
        HeaderComponent,
        NgForOf,
        BearInputTextComponent
    ],
  templateUrl: './check-ticket.component.html',
  styleUrl: './check-ticket.component.css'
})
export class CheckTicketComponent {
    tickets: TicketDto[];
    filteredTickets: TicketDto[];
    ticketId: string;

    constructor(private http: HttpClient, private link: LinkService) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/organizer/getTickets").subscribe(
            (response: any)=>{
                this.tickets=response;
                this.filteredTickets=response;
            }
        )
    }

    setTicketId(id: string)
    {
        this.ticketId=id;
        this.filteredTickets=this.tickets.filter((ticket)=>ticket.id.includes(this.ticketId));
    }

}
