import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import { HttpClient } from "@angular/common/http";
import {LinkService} from "../../services/link.service";
import {Theater} from "../../entities/Theater";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeaderComponent,
        NgIf,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
        this.router.navigateByUrl("/theater/"+id);
    }

    goToBuyTicket(id: string)
    {
        this.router.navigateByUrl("/buy/theater/"+id);
    }
}
