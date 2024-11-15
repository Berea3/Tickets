import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

    private user: User;

    constructor() { }

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
}
