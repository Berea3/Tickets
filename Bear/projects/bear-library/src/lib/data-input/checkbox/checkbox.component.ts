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
    @Output() checkedStateChange=new EventEmitter<boolean>();

    color: string;
    fontColor: string;
    hovered: boolean;


    isChecked: boolean=false;
    private checked = new BehaviorSubject<boolean>(false);
    checkedObservable=this.checked.asObservable();

    constructor(private themeService: ThemeService) {}

    ngOnInit()
    {
        this.themeService.getThemeAsObservable().subscribe(
            ()=>{
                this.color=this.themeService.getCheckboxBackgroundColor(this.type);
                this.fontColor=this.themeService.getColorFont(this.type);
            }
        );
        this.checkedObservable.subscribe(
            (value)=>{
                this.isChecked=value;
            }
        )
    }

    onChecked(event: Event)
    {
        // this.isChecked=!this.isChecked;
        this.checkedStateChange.emit(!this.isChecked);
        this.checked.next(!this.isChecked);
    }
}
