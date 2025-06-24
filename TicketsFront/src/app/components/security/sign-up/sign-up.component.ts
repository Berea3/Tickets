import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {User} from "../../../entities/User";
import { HttpClient } from "@angular/common/http";
import {LinkService} from '../../../services/link.service';
import {Router} from '@angular/router';

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

    constructor(private http: HttpClient, private link: LinkService, private router: Router) {}

    onSignUp()
    {
        this.http.post(this.link.url+"/security/sign-up",this.user,{responseType: 'text'}).subscribe(
            (response: any)=>{
                this.router.navigateByUrl("");
            }
        );
    }
}
