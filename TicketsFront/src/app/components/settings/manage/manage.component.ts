import { Component } from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {BearBtnComponent, BearInputCheckboxComponent} from 'bear-library';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-manage',
    imports: [
        HeaderComponent,
        BearBtnComponent,
        BearInputCheckboxComponent,
        NgIf,
        NgForOf,
        RouterLink
    ],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
    selectedTab: 'events' | 'places' = 'events';

    events = [
        { title: 'Music Concert', description: 'Live performance at the arena.' },
        { title: 'Tech Meetup', description: 'Discuss the latest in web dev.' },
        { title: 'Art Exhibition', description: 'Modern art gallery showing.' }
    ];

    places = [
        { name: 'Central Park', location: 'Downtown City' },
        { name: 'Oceanview Café', location: 'Seaside Road' },
        { name: 'Mountain Retreat', location: 'North Highlands' }
    ];
}
