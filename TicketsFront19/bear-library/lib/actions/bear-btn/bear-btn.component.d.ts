import { ThemeService } from '../../theme.service';
import * as i0 from "@angular/core";
export declare class BearBtnComponent {
    private themeService;
    type: string;
    color: string;
    fontColor: string;
    hovered: boolean;
    constructor(themeService: ThemeService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BearBtnComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BearBtnComponent, "bear-btn", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, ["*"], true, never>;
}
