import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgStyle} from "@angular/common";
import {HeaderComponent} from '../header/header.component';
import {BearBtnComponent, BearInputCheckboxComponent} from 'bear-library';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../services/link.service';
import {Stage} from '../../entities/Stage';

@Component({
  selector: 'app-stage',
  standalone: true,
    imports: [
        FormsModule,
        NgClass,
        HeaderComponent,
        BearBtnComponent,
        BearInputCheckboxComponent
    ],
  templateUrl: './stage.component.html',
  styleUrl: './stage.component.css'
})
export class StageComponent {

    seats: string;
    rows: number=1;
    columns: number=0;
    zig_zag: boolean=false;
    map: string;

    stage: Stage=new Stage();

    constructor(private http: HttpClient, private link: LinkService) {}

    ngOnInit()
    {
        this.map=this.parseString(this.stage.map);
    }

    parseString(input: string){
        const lines = input.split('\n'); // Split the input by newline characters
        return lines.map(line => line.trim().split(/\s+/)); // Split each line by spaces and remove extra whitespace
    }

    addStage()
    {
        this.http.post(this.link.url+"/stages/addStage",this.stage).subscribe();
    }

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

    changeZigZag(isChecked: boolean)
    {
        this.zig_zag=isChecked;
    }
}
