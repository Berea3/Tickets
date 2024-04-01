import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Theatre} from "../events/Theatre";
import {LinkService} from "../link.service";

@Component({
  selector: 'app-add-event',
  standalone: true,
    imports: [
        HeaderComponent,
        FormsModule
    ],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

    theatre: Theatre=new Theatre();

    constructor(private http: HttpClient, private link: LinkService) {}

    onSubmit()
    {
        this.http.post(this.link.url+"/theatres/create",this.theatre).subscribe();
    }
}
