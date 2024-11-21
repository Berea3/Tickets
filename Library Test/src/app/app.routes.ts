import { Routes } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {OtherPageComponent} from './components/other-page/other-page.component';

export const routes: Routes = [
    { path: 'page1', component: HomePageComponent },
    { path: 'page2', component: OtherPageComponent },
];
