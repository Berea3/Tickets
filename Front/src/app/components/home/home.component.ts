import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    constructor(private http: HttpClient) {
    }

    ngOnInit()
    {
        this.http.get("http://localhost:1201/security").subscribe(
            (response: any) => {
                console.log(response);
            }
        );
    }
}
