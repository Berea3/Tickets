import {Component, Input} from '@angular/core';
import {ThemeService} from '../theme.service';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'lib-btn',
  standalone: true,
    imports: [
        NgStyle
    ],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
    @Input() type: string;

    color: string;

    constructor(private themeService: ThemeService) {}

    ngOnInit()
    {
        this.themeService.getThemeAsObservable().subscribe(
            ()=>{
                this.color=this.themeService.getPrimary();
            }
        );
    }
}
