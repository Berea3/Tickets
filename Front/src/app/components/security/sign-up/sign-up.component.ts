import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {User} from "../user";
import {HttpClient} from "@angular/common/http";

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

    constructor(private http: HttpClient) {
    }

    onSignUp()
    {
        console.log("proba");
        // this.user.roles.push(this.role);
        this.http.post("http://localhost:1201/security/sign-up",this.user).subscribe();
    }
}
