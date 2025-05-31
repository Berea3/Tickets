import { Pipe, PipeTransform } from '@angular/core';
import * as enJson from '../translations/en.json';
import * as roJson from '../translations/ro.json';
import {Translation} from '../translations/Translation';
import {TranslateService} from './translate.service';

@Pipe({
  name: 'translate',
    pure: false
})
export class TranslatePipe implements PipeTransform {

    private translations={
        'en': enJson as Translation,
        'ro': roJson as Translation
    }

    constructor(private translate: TranslateService) {
    }

    transform(value: string): any {
        if (value && this.translations[this.translate.getLanguage()] && this.translations[this.translate.getLanguage()][value]) return this.translations[this.translate.getLanguage()][value];
        return value;
    }

}
