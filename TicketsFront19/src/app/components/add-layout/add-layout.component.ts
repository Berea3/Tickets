import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-add-layout',
    imports: [
        HeaderComponent,
        RouterLink
    ],
  templateUrl: './add-layout.component.html',
  styleUrl: './add-layout.component.css'
})
export class AddLayoutComponent {

}
