import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {User} from "../../../entities/User";
import { HttpClient } from "@angular/common/http";
import {LinkService} from '../../../services/link.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
    user: User=new User();
    role: String;

    constructor(private http: HttpClient, private link: LinkService) {
    }

    onSignUp()
    {
        console.log("proba");
        // this.user.roles.push(this.role);
        this.http.post(this.link.url+"/security/sign-up",this.user).subscribe();
        // this.http.post("http://localhost:1201/security/sign-up",this.user).subscribe();
    }
}
