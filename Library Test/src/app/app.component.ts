import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ThemeService} from 'berea-lib';
import {NgStyle} from '@angular/common';
import {BtnComponent} from '../../projects/berea-lib/src/lib/btn/btn.component';
import {CheckboxComponent} from '../../projects/berea-lib/src/lib/data-input/checkbox/checkbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [BtnComponent, FormsModule, CheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    theme: string;
    title = 'untitled';
    constructor(private themeService: ThemeService) {}

    color: string;

    ngOnInit()
    {
        this.themeService.getThemeAsObservable().subscribe(
            ()=>{
                this.color=this.themeService.getPrimary();
            }
        );
    }

    changeTheme()
    {
        this.theme=this.themeService.getTheme();
        if (this.theme=="light") this.themeService.setTheme("dark");
        else this.themeService.setTheme("light");
    }
}
