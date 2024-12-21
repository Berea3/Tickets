import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BtnComponent, CheckboxComponent} from 'BearLibrary';
import {InputComponent} from './data/input/input.component';

@Component({
  selector: 'app-root',
    imports: [RouterOutlet, BtnComponent, CheckboxComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bear';
}
