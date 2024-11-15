import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-stage',
  standalone: true,
    imports: [
        FormsModule,
        NgStyle,
        NgClass
    ],
  templateUrl: './stage.component.html',
  styleUrl: './stage.component.css'
})
export class StageComponent {

    seats: string;
    rows: number=1;
    columns: number=0;
    zig_zag: boolean=false;

    addRow()
    {
        this.rows++;
    }

    addColumn()
    {
        this.columns++;
    }

    isOdd(index: number)
    {
        return index%2;
    }
}
