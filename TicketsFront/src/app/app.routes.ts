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
import {AddLayoutComponent} from './components/add-layout/add-layout.component';
import {AddSeatingComponent} from './components/add-layout/add-seating/add-seating.component';
import {TheatersPageComponent} from './components/home/events-pages/theaters-page/theaters-page.component';
import {ConcertsPageComponent} from './components/home/events-pages/concerts-page/concerts-page.component';
import {MoviesPageComponent} from './components/home/events-pages/movies-page/movies-page.component';
import {SportsPageComponent} from './components/home/events-pages/sports-page/sports-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },

    { path: 'theaters', component: TheatersPageComponent },   // events pages
    { path: 'concerts', component: ConcertsPageComponent },
    { path: 'movies', component: MoviesPageComponent },
    { path: 'sports', component: SportsPageComponent },

    { path: 'theaters/:id', component: TheatersPageComponent },   // view event pages
    { path: 'concerts/:id', component: ConcertsPageComponent },
    { path: 'movies/:id', component: MoviesPageComponent },
    { path: 'sports/:id', component: SportsPageComponent },

    { path: 'add-event/add-theatre', component: AddTheatreComponent },
    { path: 'events/theatres/:id', component: TheatreViewComponent },
    { path: 'socket', component: SocketComponent },

    { path: 'manage', component: ManageComponent, canActivate: [authGuard] },
    { path: 'add-layout', component: AddLayoutComponent},    //canActivate: [authGuard]
    { path: 'add/seating', component: AddSeatingComponent},

    { path: 'add-event', component: AddEventComponent },
    { path: 'add/theatre', component: AddTheatreComponent, canActivate: [authGuard] },
    { path: 'add/concert', component: AddConcertComponent, canActivate: [authGuard] },
    { path: 'add/movie', component: AddMovieComponent, canActivate: [authGuard] },
    { path: 'add/sport', component: AddSportComponent, canActivate: [authGuard] },


    { path: 'profile', component: ProfileComponent },
];
