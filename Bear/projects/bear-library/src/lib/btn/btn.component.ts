import {Component, Input} from '@angular/core';
import {ThemeService} from '../theme.service';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'bear-btn',
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
    fontColor: string;
    hovered: boolean;

    constructor(private themeService: ThemeService) {}

    ngOnInit()
    {
        this.themeService.getThemeAsObservable().subscribe(
            ()=>{
                this.color=this.themeService.getButtonBackgroundColor(this.type);
                // if (this.color=="accent" || this.color=="")
                this.fontColor=this.themeService.getColorFont(this.type);
            }
        );
    }
}
