import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

    lang: 'en' | 'ro' ="en";

    constructor() { }

    changeLanguage(lang: 'en' | 'ro'){this.lang=lang;}

    getLanguage():'en' | 'ro' {return this.lang;}
}
