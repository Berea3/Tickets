import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/security/login/login.component";
import {SignUpComponent} from "./components/security/sign-up/sign-up.component";
import {AddEventComponent} from "./components/add-event/add-event.component";
import {TheatreViewComponent} from "./components/home/theatre-view/theatre-view.component";
import {AddTheatreComponent} from "./components/add-event/add-theatre/add-theatre.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'add-event', component: AddEventComponent },
    { path: 'add-event/add-theatre', component: AddTheatreComponent },
    { path: 'events/theatres/:id', component: TheatreViewComponent }
];
