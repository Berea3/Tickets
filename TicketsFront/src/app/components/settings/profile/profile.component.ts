import { Component } from '@angular/core';
import {HeaderComponent} from '../../header/header.component';
import {TranslateService} from '../../../services/translate.service';

@Component({
  selector: 'app-profile',
    imports: [
        HeaderComponent
    ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

    constructor(private translate: TranslateService) {
    }

    changeLanguage(lang: 'en'|'ro')
    {
        this.translate.changeLanguage(lang);
    }

}
