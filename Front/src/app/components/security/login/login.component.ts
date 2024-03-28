import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {HomeComponent} from "../../home/home.component";
import {SecurityService} from "../security.service";
import {User} from "../user";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    username: string;
    password: string;

    constructor(private http: HttpClient, private router: Router, private securityService: SecurityService) {}

    onSubmit()
    {
        const formData : FormData=new FormData();
        formData.append('username',this.username);
        formData.append('password',this.password);
        this.http.post('http://localhost:1201/login',formData).subscribe(
            (response: any)=>{
                console.log(response);
                this.securityService.setUser(response);
            }
        );
        // this.router.redirectTo
        console.log(this.password);
    }
}
