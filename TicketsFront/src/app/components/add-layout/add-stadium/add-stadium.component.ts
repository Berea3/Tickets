import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../services/link.service';
import {Router} from '@angular/router';
import {Stadium} from '../../../entities/layout/Stadium';
import {BearBtnComponent, BearInputCheckboxComponent, BearInputTextComponent} from 'bear-library';
import {HeaderComponent} from '../../header/header.component';
import {StadiumSection} from '../../../entities/layout/StadiumSection';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-add-stadium',
    imports: [
        BearBtnComponent,
        HeaderComponent,
        BearInputTextComponent,
    ],
  templateUrl: './add-stadium.component.html',
  styleUrl: './add-stadium.component.css'
})
export class AddStadiumComponent {
    map: string[][]=[];

    stadiumSection=new StadiumSection();

    stadium: Stadium=new Stadium();

    constructor(private http: HttpClient, private link: LinkService, private router: Router) {}

    ngOnInit()
    {
        this.stadiumSection.rowCount=0;
        this.stadiumSection.columnCount=0;
        // this.map=this.parseString(this.stage.map);
    }

    parseString(input: string){
        const lines = input.split('\n'); // Split the input by newline characters
        lines.pop();
        return lines.map(line => line.trim().split(/\s+/)); // Split each line by spaces and remove extra whitespace
    }

    addSection()
    {
        this.stadiumSection.id="a";
        this.stadium.stadiumSections.push(this.stadiumSection);
        this.stadiumSection=new StadiumSection();
        this.stadiumSection.rowCount=0;
        this.stadiumSection.columnCount=0;
        this.map=[];
    }

    addStadium()
    {
        this.http.post(this.link.url+"/stadiums/create",this.stadium).subscribe(
            ()=>{
                this.router.navigateByUrl("/manage");
            }
        )
    }

    addRow()
    {
        this.stadiumSection.rowCount++;
        this.stadiumSection.matrix="";
        for (let i=0;i<this.stadiumSection.rowCount;i++)
        {
            for (let j=0;j<this.stadiumSection.columnCount;j++)
            {
                this.stadiumSection.matrix=this.stadiumSection.matrix+"A ";
            }
            this.stadiumSection.matrix=this.stadiumSection.matrix+"\n";
        }
        this.map=this.parseString(this.stadiumSection.matrix);
        console.log("bvnksjevnkjs",this.stadiumSection.rowCount,this.stadiumSection.columnCount,this.stadiumSection.matrix);
    }

    addColumn()
    {
        this.stadiumSection.columnCount++;
        this.stadiumSection.matrix="";
        for (let i=0;i<this.stadiumSection.rowCount;i++)
        {
            for (let j=0;j<this.stadiumSection.columnCount;j++)
            {
                // console.log("bra");
                this.stadiumSection.matrix=this.stadiumSection.matrix+"A ";
            }
            this.stadiumSection.matrix=this.stadiumSection.matrix+"\n";
        }
        this.map=this.parseString(this.stadiumSection.matrix);
        console.log("bvnksjevnkjs",this.stadiumSection.rowCount,this.stadiumSection.columnCount,this.stadiumSection.matrix);
    }

    setName(name: string)
    {
        this.stadium.name=name;
    }
}
