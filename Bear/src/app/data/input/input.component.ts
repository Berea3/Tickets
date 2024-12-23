import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';
import {ThemeService} from 'BearLibrary';

@Component({
  selector: 'app-input',
  standalone: true,
    imports: [
        NgStyle
    ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
    @Input() type: string;

    hovered: boolean=false;
    normalColor: string;
    hoveredColor: string;
    color: string;

    constructor(private themeService: ThemeService) {}

    ngOnInit()
    {
        this.themeService.getThemeAsObservable().subscribe(
            ()=>{
                this.normalColor=this.themeService.getInputOutlineColor(this.type);
                this.hoveredColor=this.themeService.getInputOutlineColorHovered(this.type);
                // this.hoveredColor="red";
                this.color=this.normalColor;
            }
        )
    }

    onFocusIn()
    {
        this.color=this.hoveredColor;
    }

    onFocusOut()
    {
        this.color=this.normalColor;
    }

    // onMouseEnter()
    // {
    //     this.color=this.hoveredColor;
    //     this.hovered=true;
    // }
    //
    // onMouseLeave()
    // {
    //     this.color=this.normalColor;
    //     this.hovered=false;
    // }

}
