import { Component } from '@angular/core';
import {Stage} from '../../../entities/Stage';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../services/link.service';
import {BearBtnComponent, BearInputCheckboxComponent, BearInputTextComponent} from 'bear-library';
import {HeaderComponent} from '../../header/header.component';
import {Seating} from '../../../entities/Seating';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-seating',
    imports: [
        BearBtnComponent,
        BearInputCheckboxComponent,
        HeaderComponent,
        NgClass,
        BearInputTextComponent
    ],
  templateUrl: './add-seating.component.html',
  styleUrl: './add-seating.component.css'
})
export class AddSeatingComponent {
    seats: string;
    rows: number=1;
    columns: number=0;
    zig_zag: boolean=false;
    map: string[][]=[];

    seating: Seating=new Seating();

    constructor(private http: HttpClient, private link: LinkService, private router: Router) {}

    ngOnInit()
    {
        this.seating.rowCount=0;
        this.seating.columnCount=0;
        // this.map=this.parseString(this.stage.map);
    }

    parseString(input: string){
        const lines = input.split('\n'); // Split the input by newline characters
        lines.pop();
        return lines.map(line => line.trim().split(/\s+/)); // Split each line by spaces and remove extra whitespace
    }

    addStage()
    {
        this.http.post(this.link.url+"/seating/create",this.seating).subscribe(
            ()=>{
                this.router.navigateByUrl("/manage")
            }
        );
    }

    addRow()
    {
        this.seating.rowCount++;
        this.seating.matrix="";
        for (let i=0;i<this.seating.rowCount;i++)
        {
            for (let j=0;j<this.seating.columnCount;j++)
            {
                this.seating.matrix=this.seating.matrix+"A ";
            }
            this.seating.matrix=this.seating.matrix+"\n";
        }
        this.map=this.parseString(this.seating.matrix);
        console.log("bvnksjevnkjs",this.seating.rowCount,this.seating.columnCount,this.seating.matrix);
    }

    addColumn()
    {
        this.seating.columnCount++;
        this.seating.matrix="";
        for (let i=0;i<this.seating.rowCount;i++)
        {
            for (let j=0;j<this.seating.columnCount;j++)
            {
                // console.log("bra");
                this.seating.matrix=this.seating.matrix+"A ";
            }
            this.seating.matrix=this.seating.matrix+"\n";
        }
        this.map=this.parseString(this.seating.matrix);
        console.log("bvnksjevnkjs",this.seating.rowCount,this.seating.columnCount,this.seating.matrix);
    }

    isOdd(index: number)
    {
        return index%2;
    }

    changeZigZag(isChecked: boolean)
    {
        this.zig_zag=isChecked;
    }

    setName(name: string)
    {
        this.seating.name=name;
    }
}
