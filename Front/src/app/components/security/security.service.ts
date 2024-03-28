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
        return this.user;
    }
    setUser(user: User)
    {
        this.user=user;
    }
}
