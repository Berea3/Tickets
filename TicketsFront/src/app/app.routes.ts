import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/security/login/login.component';
import {SignUpComponent} from './components/security/sign-up/sign-up.component';
import {AddEventComponent} from './components/add-event/add-event.component';
import {AddTheatreComponent} from './components/add-event/add-theatre/add-theatre.component';
import {TheatreViewComponent} from './components/home/view-event-pages/theatre-view/theatre-view.component';
import {SocketComponent} from './components/socket/socket.component';
import {authGuard} from './services/auth.guard';
import {ManageComponent} from './components/management/organizer/manage/manage.component';
import {ProfileComponent} from './components/management/spectator/profile/profile.component';
import {AddConcertComponent} from './components/add-event/add-concert/add-concert.component';
import {AddMovieComponent} from './components/add-event/add-movie/add-movie.component';
import {AddSportComponent} from './components/add-event/add-sport/add-sport.component';
import {AddLayoutComponent} from './components/add-layout/add-layout.component';
import {AddSeatingComponent} from './components/add-layout/add-seating/add-seating.component';
import {TheatersPageComponent} from './components/home/events-pages/theaters-page/theaters-page.component';
import {ConcertsPageComponent} from './components/home/events-pages/concerts-page/concerts-page.component';
import {MoviesPageComponent} from './components/home/events-pages/movies-page/movies-page.component';
import {SportsPageComponent} from './components/home/events-pages/sports-page/sports-page.component';
import {BuyTheaterTicketComponent} from './components/buy-ticket/buy-theater-ticket/buy-theater-ticket.component';
import {CheckTicketComponent} from './components/management/organizer/check-ticket/check-ticket.component';
import {BuyConcertTicketComponent} from './components/buy-ticket/buy-concert-ticket/buy-concert-ticket.component';
import {BuyMovieTicketComponent} from './components/buy-ticket/buy-movie-ticket/buy-movie-ticket.component';
import {AddStadiumComponent} from './components/add-layout/add-stadium/add-stadium.component';
import {BuySportTicketComponent} from './components/buy-ticket/buy-sport-ticket/buy-sport-ticket.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },

    // events pages
    { path: 'theaters', component: TheatersPageComponent },   // events pages
    { path: 'concerts', component: ConcertsPageComponent },
    { path: 'movies', component: MoviesPageComponent },
    { path: 'sports', component: SportsPageComponent },

    { path: 'theater/:id', component: TheatreViewComponent },   // view event pages
    { path: 'concert/:id', component: ConcertsPageComponent },
    { path: 'movie/:id', component: MoviesPageComponent },
    { path: 'sport/:id', component: SportsPageComponent },

    // pages for spectator
    { path: 'profile', component: ProfileComponent},
    { path: 'buy/theater/:id', component: BuyTheaterTicketComponent, canActivate: [authGuard] },
    { path: 'buy/concert/:id', component: BuyConcertTicketComponent, canActivate: [authGuard] },
    { path: 'buy/movie/:id', component: BuyMovieTicketComponent, canActivate: [authGuard]},
    { path: 'buy/sport/:id', component: BuySportTicketComponent, canActivate: [authGuard]},

    { path: 'manage', component: ManageComponent, canActivate: [authGuard] },
    { path: 'organizer/check-ticket', component: CheckTicketComponent},
    { path: 'add-layout', component: AddLayoutComponent},
    { path: 'add/seating', component: AddSeatingComponent},
    { path: 'add/stadium', component: AddStadiumComponent},
    { path: 'check-ticket', component: CheckTicketComponent},

    { path: 'add-event', component: AddEventComponent },
    { path: 'add/theatre', component: AddTheatreComponent, canActivate: [authGuard] },
    { path: 'add/concert', component: AddConcertComponent, canActivate: [authGuard] },
    { path: 'add/movie', component: AddMovieComponent, canActivate: [authGuard] },
    { path: 'add/sport', component: AddSportComponent, canActivate: [authGuard] },


    { path: 'profile', component: ProfileComponent },
];
