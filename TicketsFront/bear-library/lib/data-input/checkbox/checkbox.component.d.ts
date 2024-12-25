import { EventEmitter } from '@angular/core';
import { ThemeService } from '../../theme.service';
import * as i0 from "@angular/core";
export declare class CheckboxComponent {
    private themeService;
    type: string;
    checkedStateChange: EventEmitter<boolean>;
    color: string;
    fontColor: string;
    hovered: boolean;
    isChecked: boolean;
    private checked;
    checkedObservable: import("rxjs").Observable<boolean>;
    constructor(themeService: ThemeService);
    ngOnInit(): void;
    onChecked(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "ber-in-check", never, { "type": { "alias": "type"; "required": false; }; }, { "checkedStateChange": "checkedStateChange"; }, never, never, true, never>;
}
