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

    user: User=new User();

    constructor(private http: HttpClient, private router: Router, private securityService: SecurityService) {}

    onSubmit()
    {
        const formData : FormData=new FormData();
        formData.append('username',this.username);
        formData.append('password',this.password);
        this.http.post('http://localhost:1201/login',formData).subscribe(
            (response: any)=>{
                // if (response instanceof User)
                // {
                //     console.log(response);
                //     this.router.navigateByUrl("");
                //     this.securityService.setUser(response);
                //     sessionStorage.setItem("loggedin","yes")
                // }
                // else
                // {
                //     alert("wrong credentials");
                // }
                this.user=response;
                if (this.user!=null)
                {
                    console.log(response);
                    this.router.navigateByUrl("");
                    this.securityService.setUser(response);
                    sessionStorage.setItem("loggedin","yes")
                }

                else
                {
                    alert("wrong credentials");
                }

                // console.log(response);
                // this.router.navigateByUrl("");
                // this.securityService.setUser(response);
                // sessionStorage.setItem("loggedin","yes")
            }
        );
        // this.router.redirectTo
        console.log(this.password);
    }
}
