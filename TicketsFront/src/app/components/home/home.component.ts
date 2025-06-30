import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import { HttpClient } from "@angular/common/http";
import {LinkService} from "../../services/link.service";
import {Theater} from "../../entities/Theater";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {BearBtnComponent, BearInputCheckboxComponent, BearInputTextComponent} from 'bear-library';
import {EventDto} from '../../dtos/EventDto';

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeaderComponent,
        BearInputCheckboxComponent,
        BearInputTextComponent,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    theaters: Theater[];    // will change to event
    events: EventDto[];
    filteredEvents: EventDto[];
    showOnlyAvailable: boolean=false;
    searchText: string="";

    constructor(private http: HttpClient, protected link: LinkService, private router: Router) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/events/getAll").subscribe(
            (response: any)=>{
                this.events=response;
                this.filteredEvents=response;
            }
        );
        // this.http.get(this.link.url+"/theaters/getAll").subscribe(
        //     (data: any)=>{
        //         this.theaters=data;
        //         console.log(data);
        //     }
        // )
    }

    goToBuyTicket(event: EventDto)
    {
        this.router.navigateByUrl("/buy/"+event.eventType+"/"+event.id);
    }

    setExpired(showOnlyAvailable: boolean)
    {
        this.showOnlyAvailable=showOnlyAvailable;
        this.filterEvents();
    }

    changeSearch(text: string)
    {
        this.searchText=text;
        this.filterEvents();
    }

    filterEvents()
    {
        console.log(new Date());
        console.log(this.searchText);
        this.filteredEvents=this.events.filter((event)=>event.name.toLowerCase().includes(this.searchText.toLowerCase()) || event.eventType.toLowerCase().includes(this.searchText.toLowerCase()));   //|| event.description.toLowerCase().includes(this.searchText.toLowerCase())
        if (this.showOnlyAvailable) this.filteredEvents=this.filteredEvents.filter((event)=>new Date(event.date).getTime()>new Date().getTime());
        console.log(this.filteredEvents);
    }
}
