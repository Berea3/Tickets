import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ThemeService} from '../../theme.service';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'ber-in-check',
  standalone: true,
    imports: [
        NgStyle
    ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {

    @Input() type: string;
    @Output() isChecked=new EventEmitter<boolean>();

    color: string;
    fontColor: string;
    hovered: boolean;

    // checked: boolean=false;

    checked: boolean=false;

    constructor(private themeService: ThemeService) {}

    ngOnInit()
    {
        this.themeService.getThemeAsObservable().subscribe(
            ()=>{
                this.color=this.themeService.getCheckboxBackgroundColor(this.type);
                this.fontColor=this.themeService.getColorFont(this.type);
            }
        );
    }

    onChecked(event: Event)
    {
        this.checked=!this.checked;
        this.isChecked.emit(this.checked);
    }
}
