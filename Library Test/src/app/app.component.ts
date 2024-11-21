import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BtnComponent, ThemeService} from 'berea-lib';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, BtnComponent, BtnComponent, FormsModule, BtnComponent, NgStyle],
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
