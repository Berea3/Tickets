import { EventEmitter } from '@angular/core';
import { ThemeService } from '../../theme.service';
import * as i0 from "@angular/core";
export declare class InputTextComponent {
    private themeService;
    type: string;
    textChanged: EventEmitter<string>;
    hovered: boolean;
    normalColor: string;
    hoveredColor: string;
    color: string;
    focused: boolean;
    text: string;
    constructor(themeService: ThemeService);
    ngOnInit(): void;
    onFocusIn(): void;
    onFocusOut(): void;
    onInput(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputTextComponent, "bear-input-text", never, { "type": { "alias": "type"; "required": false; }; }, { "textChanged": "textChanged"; }, never, ["*"], true, never>;
}
