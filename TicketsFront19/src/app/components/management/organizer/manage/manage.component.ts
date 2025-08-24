import { Component } from '@angular/core';
import {HeaderComponent} from '../../../header/header.component';
import {BearBtnComponent, BearInputCheckboxComponent} from 'bear-library';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LinkService} from '../../../../services/link.service';
import {EventDto} from '../../../../dtos/EventDto';
import {PlaceDto} from '../../../../dtos/PlaceDto';
import {resolve} from '@angular/compiler-cli';

@Component({
  selector: 'app-manage',
    imports: [
        HeaderComponent,
        BearBtnComponent,
        NgIf,
        NgForOf,
        RouterLink
    ],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
    selectedTab: 'events' | 'places' = 'events';
    events: EventDto[];
    places: PlaceDto[];

    constructor(private http: HttpClient, private link: LinkService) {}

    // events = [
    //     { title: 'Music Concert', description: 'Live performance at the arena.' },
    //     { title: 'Tech Meetup', description: 'Discuss the latest in web dev.' },
    //     { title: 'Art Exhibition', description: 'Modern art gallery showing.' }
    // ];

    // places = [
    //     { name: 'Central Park', location: 'Downtown City' },
    //     { name: 'Oceanview Café', location: 'Seaside Road' },
    //     { name: 'Mountain Retreat', location: 'North Highlands' }
    // ];

    ngOnInit()
    {
        this.http.get(this.link.url+"/organizer/getEvents").subscribe(
            (response: any)=>{
                this.events=response;
            }
        );
        this.http.get(this.link.url+"/organizer/getPlaces").subscribe(
            (response: any)=>{
                this.places=response;
            }
        );
    }

    deletePlace(place: PlaceDto)
    {
        this.http.delete(this.link.url+"/"+place.placeType+"/delete/"+place.id).subscribe(
            (response: any)=>{
                this.http.get(this.link.url+"/organizer/getPlaces").subscribe(
                    (response: any)=>{
                        this.places=response;
                    }
                );
            }
        )
    }
}
