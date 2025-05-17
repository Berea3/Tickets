import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import { HttpClient } from "@angular/common/http";
import {LinkService} from "../../services/link.service";
import {Theater} from "../../entities/Theater";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeaderComponent,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    theaters: Theater[];

    constructor(private http: HttpClient, private link: LinkService, private router: Router) {
    }

    ngOnInit()
    {
        // this.http.get("http://localhost:1201/security").subscribe(
        //     (response: any) => {
        //         console.log(response);
        //     }
        // );

        this.http.get(this.link.url+"/theaters/getAll").subscribe(
            (data: any)=>{
                this.theaters=data;
                console.log(data);
            }
        )
    }

    openTheatre(id: number)
    {
        this.router.navigateByUrl("/events/theatres/"+id);
    }
}
