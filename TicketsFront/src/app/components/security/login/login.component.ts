import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
import {HomeComponent} from "../../home/home.component";
import {SecurityService} from "../../../services/security.service";
import {LinkService} from "../../../services/link.service";
import {BearBtnComponent, BearInputTextComponent} from 'bear-library';
import {User} from '../../../entities/User';

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        FormsModule,
        BearInputTextComponent,
        BearBtnComponent
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    email: string;
    password: string;
    isTrue: boolean=true;

    user: User=new User();

    constructor(private http: HttpClient, private router: Router, private securityService: SecurityService, private link: LinkService) {}

    onSubmit()
    {
        const formData : FormData=new FormData();
        formData.append('username',this.email);
        formData.append('password',this.password);
        formData.append('rememberMe',"true");
        this.http.post(this.link.url+'/login',formData).subscribe(
            (response: any)=>{

                this.user=response;
                if (this.user.id==null)
                {
                    alert("wrong credentials");
                }
                else
                {
                    this.securityService.checkLoggedIn();
                    this.router.navigateByUrl("");
                }
            }
        );
        console.log(this.password);
    }

    onSignUp()
    {
        this.router.navigateByUrl("sign-up");
    }

    setEmail(email: string)
    {
        this.email=email;
    }

    setPassword(password: string)
    {
        this.password=password;
    }
}
