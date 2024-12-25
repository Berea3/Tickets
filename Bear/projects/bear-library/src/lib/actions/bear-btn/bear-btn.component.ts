import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';
import {ThemeService} from '../../theme.service';

@Component({
  selector: 'bear-btn',
    imports: [
        NgStyle
    ],
  templateUrl: './bear-btn.component.html',
  styleUrl: './bear-btn.component.css'
})
export class BearBtnComponent {
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
