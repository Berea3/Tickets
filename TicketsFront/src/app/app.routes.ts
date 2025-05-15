import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/security/login/login.component';
import {SignUpComponent} from './components/security/sign-up/sign-up.component';
import {AddEventComponent} from './components/add-event/add-event.component';
import {AddTheatreComponent} from './components/add-event/add-theatre/add-theatre.component';
import {TheatreViewComponent} from './components/home/theatre-view/theatre-view.component';
import {StageComponent} from './components/stage/stage.component';
import {SocketComponent} from './components/socket/socket.component';
import {authGuard} from './services/auth.guard';
import {ManageComponent} from './components/settings/manage/manage.component';
import {ProfileComponent} from './components/settings/profile/profile.component';
import {AddConcertComponent} from './components/add-event/add-concert/add-concert.component';
import {AddMovieComponent} from './components/add-event/add-movie/add-movie.component';
import {AddSportComponent} from './components/add-event/add-sport/add-sport.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'add-event', component: AddEventComponent },
    { path: 'add-event/add-theatre', component: AddTheatreComponent },
    { path: 'events/theatres/:id', component: TheatreViewComponent },
    { path: 'socket', component: SocketComponent },

    { path: 'manage', component: ManageComponent, canActivate: [authGuard] },
    { path: 'add-stage', component: StageComponent},    //canActivate: [authGuard]
    { path: 'add/theatre', component: AddTheatreComponent, canActivate: [authGuard] },
    { path: 'add/concert', component: AddConcertComponent, canActivate: [authGuard] },
    { path: 'add/movie', component: AddMovieComponent, canActivate: [authGuard] },
    { path: 'add/sport', component: AddSportComponent, canActivate: [authGuard] },


    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
];
