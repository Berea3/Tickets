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
    map: string[][]=[];

    stage: Stage=new Stage();

    constructor(private http: HttpClient, private link: LinkService) {}

    ngOnInit()
    {
        this.stage.rowCount=0;
        this.stage.columnCount=0;
        // this.map=this.parseString(this.stage.map);
    }

    parseString(input: string){
        const lines = input.split('\n'); // Split the input by newline characters
        lines.pop();
        return lines.map(line => line.trim().split(/\s+/)); // Split each line by spaces and remove extra whitespace
    }

    addStage()
    {
        this.http.post(this.link.url+"/stages/addStage",this.stage).subscribe();
    }

    addRow()
    {
        this.stage.rowCount++;
        this.stage.matrix="";
        for (let i=0;i<this.stage.rowCount;i++)
        {
            for (let j=0;j<this.stage.columnCount;j++)
            {
                this.stage.matrix=this.stage.matrix+"A ";
            }
            this.stage.matrix=this.stage.matrix+"\n";
        }
        this.map=this.parseString(this.stage.matrix);
        console.log("bvnksjevnkjs",this.stage.rowCount,this.stage.columnCount,this.stage.matrix);
    }

    addColumn()
    {
        this.stage.columnCount++;
        this.stage.matrix="";
        for (let i=0;i<this.stage.rowCount;i++)
        {
            for (let j=0;j<this.stage.columnCount;j++)
            {
                // console.log("bra");
                this.stage.matrix=this.stage.matrix+"A ";
            }
            this.stage.matrix=this.stage.matrix+"\n";
        }
        this.map=this.parseString(this.stage.matrix);
        console.log("bvnksjevnkjs",this.stage.rowCount,this.stage.columnCount,this.stage.matrix);
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
