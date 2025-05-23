import { Component } from '@angular/core';
import {Concert} from '../../../../entities/Concert';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../../services/link.service';
import {Router} from '@angular/router';
import {Movie} from '../../../../entities/Movie';
import {HeaderComponent} from '../../../header/header.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-movies-page',
    imports: [
        HeaderComponent,
        NgIf
    ],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.css'
})
export class MoviesPageComponent {
    movies: Movie[];

    constructor(private http: HttpClient, protected link: LinkService, private router: Router) {}

    ngOnInit()
    {
        this.http.get(this.link.url+"/movies/getAll").subscribe(
            (response: any)=>{
                this.movies=response;
            }
        );
    }

    openMovie(id: string)
    {
        this.router.navigateByUrl("/movies/"+id);
    }
}
