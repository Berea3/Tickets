import { Component } from '@angular/core';
import {ThemeService} from '../../../../projects/berea-lib/src/lib/theme.service';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
        NgStyle
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {


    constructor(private themeService: ThemeService) {}

    theme: string;
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
