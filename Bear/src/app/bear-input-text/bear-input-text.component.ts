import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ThemeService} from 'bear-library'
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'bear-input-text',
    imports: [
        NgStyle,
        NgClass
    ],
  templateUrl: './bear-input-text.component.html',
  styleUrl: './bear-input-text.component.css'
})
export class BearInputTextComponent {
    @Input() type: string;
    @Output() textChanged=new EventEmitter<string>();

    hovered: boolean=false;
    normalColor: string;
    hoveredColor: string;
    color: string;
    focused: boolean;
    text: string="";

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
        this.focused=true;
    }

    onFocusOut()
    {
        this.color=this.normalColor;
        this.focused=false;
    }

    onInput(event: Event)
    {
        this.text=(event.target as HTMLInputElement).value;
        this.textChanged.emit(this.text);
    }
}
