import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BtnComponent} from 'berea-lib';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, BtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'UseLibrary';
}
