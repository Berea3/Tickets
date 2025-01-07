import { Component } from '@angular/core';
import {BearBtnComponent, BearInputCheckboxComponent, BearInputTextComponent} from 'BearLibrary'

@Component({
  selector: 'app-root',
    imports: [BearBtnComponent, BearInputTextComponent, BearInputCheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Bear';

    inputChecked(state: boolean)
    {
        console.log(state);
    }

    textChanged(text: string)
    {
        console.log(text);
    }
}
