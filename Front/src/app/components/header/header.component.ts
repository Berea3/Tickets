import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SecurityService} from "../security/security.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        RouterLink,
        NgIf
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    constructor(private securityService: SecurityService) {}

    ngOnInit()
    {
        console.log(this.securityService.getUser());
    }

    isOrganizer()
    {
        // for (let i=0;i<this.securityService.getUser().roles.length;i++) if (this.securityService.getUser().roles[i]=="organizer") return true;
        if (this.securityService.getUser()!=null) if (this.securityService.getUser().roles=="organizer") return true;
        return false;
    }

}
