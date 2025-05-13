import { Injectable } from '@angular/core';
import {User} from "../components/security/User";
import {LinkService} from './link.service';
import {HttpClient} from '@angular/common/http';
import {Auth} from '../entities/Auth';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

    private user: User=new User();
    private auth: Auth;
    private loggedIn: boolean=false;

    constructor(private link: LinkService, private http: HttpClient) {
        this.http.get(this.link.url+"/security/loggedin").subscribe(
            (response: any)=>{
                this.auth=response;
                if (this.auth.loggedin==true)
                {
                    this.loggedIn=true;
                    this.http.get(this.link.url+"/security/getUser").subscribe(
                        (response: any)=>{
                            this.user=response;
                        }
                    );
                }
                else this.loggedIn=false;
            }
        );
    }

    isLoggedIn()
    {
        return this.loggedIn;
    }

    getUser()
    {
        // return sessionStorage.getItem("roles");
        return this.user;
    }

    getRole()
    {
        // console.log(sessionStorage.getItem("roles"));
        return sessionStorage.getItem("roles");
    }

    setUser(user: User)
    {
        this.user=user;
    }

    setLoggedIn()
    {
        this.loggedIn=true;
    }

    setLoggedOut()
    {
        this.loggedIn=false;
    }

    checkLoggedIn()
    {
        this.http.get(this.link.url+"/security/loggedin").subscribe(
            (response: any)=>{
                this.auth=response;
                if (this.auth.loggedin==true)
                {
                    this.loggedIn=true;
                    this.http.get(this.link.url+"/security/getUser").subscribe(
                        (response: any)=>{
                            this.user=response;
                        }
                    );
                }
                else this.loggedIn=false;
            }
        );
    }
}
