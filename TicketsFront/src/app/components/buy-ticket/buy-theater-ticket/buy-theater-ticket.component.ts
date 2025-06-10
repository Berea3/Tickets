import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../services/link.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TheaterTicket} from '../../../entities/tickets/TheaterTicket';
import {Theater} from '../../../entities/Theater';
import {HeaderComponent} from '../../header/header.component';
import {Seating} from '../../../entities/layout/Seating';
import {NgClass} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BearBtnComponent} from 'bear-library';

@Component({
  selector: 'app-buy-theater-ticket',
    imports: [
        HeaderComponent,
        NgClass,
        FormsModule,
        BearBtnComponent
    ],
  templateUrl: './buy-theater-ticket.component.html',
  styleUrl: './buy-theater-ticket.component.css'
})
export class BuyTheaterTicketComponent {
    theaterTicket: TheaterTicket=new TheaterTicket();
    theater: Theater=new Theater();
    seating: Seating=new Seating();
    map: string[][]=[];
    zig_zag: boolean=false;

    constructor(private http: HttpClient, private link: LinkService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/theaters/getById/"+this.activatedRoute.snapshot.params['id']).subscribe(
            (response: any)=>{
                this.theater=response;
                console.log(this.theater);
                this.seating=this.theater.seating;
                this.map=this.parseString(this.seating.matrix);
                console.log(this.map);
            }
        );
    }

    parseString(input: string){
        const lines = input.split('\n');
        lines.pop();
        return lines.map(line => line.trim().split(/\s+/));
    }

    selectSeat(i: number, j: number)
    {
        if (this.theaterTicket.row!=undefined && this.theaterTicket.position!=undefined)
        {
            this.map[this.theaterTicket.row][this.theaterTicket.position]='A';
        }
        console.log(i,j);
        this.theaterTicket.row=i;
        this.theaterTicket.position=j;
        this.map[i][j]='R';
    }

    buyTicket()
    {
        this.http.post(this.link.url+"/theaters/buy/"+this.activatedRoute.snapshot.params['id'],this.theaterTicket).subscribe(
            ()=>{
                // this.router.navigateByUrl("");
            }
        );
    }

}
