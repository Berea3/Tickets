import { Component } from '@angular/core';
import {BearBtnComponent} from 'bear-library';
import {HeaderComponent} from '../../header/header.component';
import {SportTicket} from '../../../entities/tickets/SportTicket';
import {Sport} from '../../../entities/Sport';
import {Stadium} from '../../../entities/layout/Stadium';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../services/link.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StadiumSection} from '../../../entities/layout/StadiumSection';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-buy-sport-ticket',
    imports: [
        BearBtnComponent,
        HeaderComponent,
        FormsModule
    ],
  templateUrl: './buy-sport-ticket.component.html',
  styleUrl: './buy-sport-ticket.component.css'
})
export class BuySportTicketComponent {
    sportTicket: SportTicket=new SportTicket();
    sport: Sport=new Sport();
    stadium: Stadium=new Stadium();
    stadiumSectionIndex: number=0;
    map: string[][]=[];

    constructor(private http: HttpClient, private link: LinkService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/sports/getById/"+this.activatedRoute.snapshot.params['id']).subscribe(
            (response: any)=>{
                this.sport=response;
                this.stadium=this.sport.stadium;
                this.map=this.parseString(this.stadium.stadiumSections[this.stadiumSectionIndex].matrix);
            }
        )
    }

    parseString(input: string){
        const lines = input.split('\n');
        lines.pop();
        return lines.map(line => line.trim().split(/\s+/));
    }

    selectSeat(i: number, j: number)
    {
        if (this.sportTicket.row!=undefined && this.sportTicket.position!=undefined)
        {
            this.map[this.sportTicket.row][this.sportTicket.position]='A';
        }
        console.log(i,j);
        this.sportTicket.row=i;
        this.sportTicket.position=j;
        this.sportTicket.stadiumSection=this.stadium.stadiumSections[this.stadiumSectionIndex].id;
        this.map[i][j]='R';
    }

    stadiumSectionIndexChanged(index: number)
    {
        this.map=this.parseString(this.stadium.stadiumSections[index].matrix);
    }

    buyTicket()
    {
        this.http.post(this.link.url+"/sports/buy/"+this.activatedRoute.snapshot.params['id'],this.sportTicket).subscribe(
            ()=>{
                // this.router.navigateByUrl("");
            }
        );
    }
}
