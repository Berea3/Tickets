import { ThemeService } from '../theme.service';
import * as i0 from "@angular/core";
export declare class BtnComponent {
    private themeService;
    type: string;
    color: string;
    fontColor: string;
    hovered: boolean;
    constructor(themeService: ThemeService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BtnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BtnComponent, "bear-btn", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
