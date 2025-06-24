import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {SecurityService} from "../../services/security.service";
import {NgIf} from "@angular/common";
import {BearBtnComponent} from 'bear-library';
import {TranslatePipe} from '../../services/translate.pipe';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../services/link.service';

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        RouterLink,
        NgIf,
        BearBtnComponent,
        TranslatePipe
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    constructor(private securityService: SecurityService, private http: HttpClient, private router: Router, private link: LinkService) {}

    ngOnInit()
    {
        console.log(this.securityService.getUser());
    }

    isOrganizer()
    {
        if (this.securityService.getRole()=="organizer") return true;
        console.log("not organizer");
        console.log(this.securityService.getRole());
        return false;
    }

    isSpectator()
    {
        if (this.securityService.getRole()=="spectator") return true;
        return false;
    }

    isLoggedIn()
    {
        return this.securityService.isLoggedIn();
    }

    logOut()
    {
        this.http.post(this.link.url+"/logout",null).subscribe(   // should be moved to securityService
            (response: any)=>{
                this.router.navigateByUrl("");
                this.securityService.checkLoggedIn();
            }
        );
    }
}
