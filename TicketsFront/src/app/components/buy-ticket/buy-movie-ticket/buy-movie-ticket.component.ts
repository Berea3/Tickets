import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../services/link.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../../../entities/Movie';
import {TheaterTicket} from '../../../entities/tickets/TheaterTicket';
import {Theater} from '../../../entities/Theater';
import {Seating} from '../../../entities/layout/Seating';
import {MovieTicket} from '../../../entities/tickets/MovieTicket';
import {BearBtnComponent} from 'bear-library';
import {HeaderComponent} from '../../header/header.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-buy-movie-ticket',
    imports: [
        BearBtnComponent,
        HeaderComponent,
        NgClass
    ],
  templateUrl: './buy-movie-ticket.component.html',
  styleUrl: './buy-movie-ticket.component.css'
})
export class BuyMovieTicketComponent {

    movieTicket: MovieTicket=new MovieTicket();
    movie: Movie=new Movie();
    seating: Seating=new Seating();
    map: string[][]=[];
    zig_zag: boolean=false;

    constructor(private http: HttpClient, private link: LinkService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/movies/getById/"+this.activatedRoute.snapshot.params['id']).subscribe(
            (response: any)=>{
                this.movie=response;
                this.seating=this.movie.seating;
                this.map=this.parseString(this.seating.matrix);
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
        if (this.movieTicket.row!=undefined && this.movieTicket.position!=undefined) this.map[this.movieTicket.row][this.movieTicket.position]='A';
        this.movieTicket.row=i;
        this.movieTicket.position=j;
        this.map[i][j]='R';
    }

    buyTicket()
    {
        this.http.post(this.link.url+"/movies/buy/"+this.activatedRoute.snapshot.params['id'],this.movieTicket).subscribe(
            ()=>{
                // this.router.navigateByUrl("");
            }
        );
    }

}
