import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

class BearLibraryService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: BearLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: BearLibraryService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: BearLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class BearLibraryComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: BearLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.4", type: BearLibraryComponent, isStandalone: true, selector: "lib-BearLibrary", ngImport: i0, template: `
    <p>
      bear-library works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: BearLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-BearLibrary', imports: [], template: `
    <p>
      bear-library works!
    </p>
  ` }]
        }] });

const themes = [
    {
        primary: "rgba(74,0,255,255)",
        primaryActive: "rgba(60,0,230,255)",
        secondary: "rgba(255,0,211,255)",
        secondaryActive: "rgba(241,0,183,255)",
        accent: "rgba(0,215,192,255)",
        accentActive: "rgba(0,187,166,255)",
        info: "rgba(0,181,255,255)",
        infoActive: "rgba(0,157,228,255)",
        success: "rgba(0,169,110,255)",
        warning: "rgba(255,190,0,255)",
        error: "rgba(255,88,97,255)",
        neutral: "black",
        background: "white"
    },
    {
        primary: "red",
        primaryActive: "rgba(63,0,231,255)",
        secondary: "pink",
        secondaryActive: "rgba(241,0,183,255)",
        accent: "green",
        accentActive: "rgba(0,187,166,255)",
        info: "rgba(0,181,255,255)",
        infoActive: "rgba(0,157,228,255)",
        success: "",
        warning: "",
        error: "",
        neutral: "black",
        background: "black"
    },
];
class ThemeService {
    theme = new BehaviorSubject("");
    themeObservable = this.theme.asObservable();
    themes = themes;
    constructor() { }
    setTheme(theme) {
        console.log("changing theme");
        localStorage.setItem("theme", theme);
        this.theme.next(theme);
    }
    getTheme() {
        let theme;
        theme = localStorage.getItem("theme");
        if (theme == null)
            return "primary";
        else
            return theme;
    }
    getThemeIndex() {
        let theme;
        theme = localStorage.getItem("theme");
        if (theme == "light")
            return 0;
        else
            return 1;
    }
    getThemeAsObservable() {
        return this.theme.asObservable();
    }
    getPrimary() {
        let color;
        color = this.themes?.[this.getThemeIndex()]?.primary;
        return color;
    }
    getPrimaryActive() {
        let color;
        color = this.themes?.[this.getThemeIndex()]?.primaryActive;
        return color;
    }
    getSecondary() {
        let color;
        color = this.themes?.[this.getThemeIndex()]?.secondary;
        return color;
    }
    getAccent() {
        let color;
        color = this.themes?.[this.getThemeIndex()]?.accent;
        return color;
    }
    getInfo() {
        let color;
        color = this.themes?.[this.getThemeIndex()]?.info;
        return color;
    }
    getSuccess() {
        let color;
        color = this.themes?.[this.getThemeIndex()]?.success;
        return color;
    }
    getWarning() {
        let color;
        color = this.themes?.[this.getThemeIndex()]?.warning;
        return color;
    }
    getError() {
        let color;
        color = this.themes?.[this.getThemeIndex()]?.error;
        return color;
    }
    getButtonBackgroundColor(color) {
        switch (color) {
            case "primary":
                return this.themes?.[this.getThemeIndex()].primary;
            case "secondary":
                return this.themes?.[this.getThemeIndex()].secondary;
            case "accent":
                return this.themes?.[this.getThemeIndex()].accent;
            case "info":
                return this.themes?.[this.getThemeIndex()].info;
            case "success":
                return this.themes?.[this.getThemeIndex()].success;
            case "warning":
                return this.themes?.[this.getThemeIndex()].warning;
            case "error":
                return this.themes?.[this.getThemeIndex()].error;
            default:
                return this.themes?.[this.getThemeIndex()].primary;
        }
    }
    getCheckboxBackgroundColor(color) {
        switch (color) {
            case "primary":
                return this.themes?.[this.getThemeIndex()].primary;
            case "secondary":
                return this.themes?.[this.getThemeIndex()].secondary;
            case "accent":
                return this.themes?.[this.getThemeIndex()].accent;
            case "info":
                return this.themes?.[this.getThemeIndex()].info;
            case "success":
                return this.themes?.[this.getThemeIndex()].success;
            case "warning":
                return this.themes?.[this.getThemeIndex()].warning;
            case "error":
                return this.themes?.[this.getThemeIndex()].error;
            default:
                return this.themes?.[this.getThemeIndex()].primary;
        }
    }
    getInputOutlineColor(color) {
        switch (color) {
            case "primary":
                return this.themes?.[this.getThemeIndex()].primary;
            case "secondary":
                return this.themes?.[this.getThemeIndex()].secondary;
            case "accent":
                return this.themes?.[this.getThemeIndex()].accent;
            case "info":
                return this.themes?.[this.getThemeIndex()].info;
            case "success":
                return this.themes?.[this.getThemeIndex()].success;
            case "warning":
                return this.themes?.[this.getThemeIndex()].warning;
            case "error":
                return this.themes?.[this.getThemeIndex()].error;
            default:
                return this.themes?.[this.getThemeIndex()].primary;
        }
    }
    getInputOutlineColorHovered(color) {
        switch (color) {
            case "primary":
                return this.themes?.[this.getThemeIndex()].primaryActive;
            case "secondary":
                return this.themes?.[this.getThemeIndex()].secondary;
            case "accent":
                return this.themes?.[this.getThemeIndex()].accent;
            case "info":
                return this.themes?.[this.getThemeIndex()].info;
            case "success":
                return this.themes?.[this.getThemeIndex()].success;
            case "warning":
                return this.themes?.[this.getThemeIndex()].warning;
            case "error":
                return this.themes?.[this.getThemeIndex()].error;
            default:
                return this.themes?.[this.getThemeIndex()].primary;
        }
    }
    getColorFont(color) {
        if (color == "accent" || color == "info" || color == "success" || color == "warning" || color == "error")
            return "black";
        else
            return "white";
    }
    getBackground() {
        let color;
        color = this.themes?.[this.getThemeIndex()]?.background;
        return color;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: ThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: ThemeService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: ThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class BtnComponent {
    themeService;
    type;
    color;
    fontColor;
    hovered;
    constructor(themeService) {
        this.themeService = themeService;
    }
    ngOnInit() {
        this.themeService.getThemeAsObservable().subscribe(() => {
            this.color = this.themeService.getButtonBackgroundColor(this.type);
            // if (this.color=="accent" || this.color=="")
            this.fontColor = this.themeService.getColorFont(this.type);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: BtnComponent, deps: [{ token: ThemeService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.4", type: BtnComponent, isStandalone: true, selector: "bear-btn", inputs: { type: "type" }, ngImport: i0, template: "<button class=\"btn\" [ngStyle]=\"{'background-color': color, color: fontColor}\">\n    <ng-content></ng-content>\n</button>\n", styles: [".btn{font-family:Tahoma,sans-serif;font-size:1rem;font-weight:600;display:flex;align-items:center;text-align:center;height:2.8rem;padding:0 1rem;border-radius:.5rem;border:none;transition:all .1s ease-in-out}.btn:hover,.btn:active{filter:brightness(90%);cursor:pointer}.btn:active{transform:scale(.95)}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: BtnComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bear-btn', standalone: true, imports: [
                        NgStyle
                    ], template: "<button class=\"btn\" [ngStyle]=\"{'background-color': color, color: fontColor}\">\n    <ng-content></ng-content>\n</button>\n", styles: [".btn{font-family:Tahoma,sans-serif;font-size:1rem;font-weight:600;display:flex;align-items:center;text-align:center;height:2.8rem;padding:0 1rem;border-radius:.5rem;border:none;transition:all .1s ease-in-out}.btn:hover,.btn:active{filter:brightness(90%);cursor:pointer}.btn:active{transform:scale(.95)}\n"] }]
        }], ctorParameters: () => [{ type: ThemeService }], propDecorators: { type: [{
                type: Input
            }] } });

class CheckboxComponent {
    themeService;
    type;
    checkedStateChange = new EventEmitter();
    color;
    fontColor;
    hovered;
    isChecked = false;
    checked = new BehaviorSubject(false);
    checkedObservable = this.checked.asObservable();
    constructor(themeService) {
        this.themeService = themeService;
    }
    ngOnInit() {
        this.themeService.getThemeAsObservable().subscribe(() => {
            this.color = this.themeService.getCheckboxBackgroundColor(this.type);
            this.fontColor = this.themeService.getColorFont(this.type);
        });
        this.checkedObservable.subscribe((value) => {
            this.isChecked = value;
        });
    }
    onChecked(event) {
        // this.isChecked=!this.isChecked;
        this.checkedStateChange.emit(!this.isChecked);
        this.checked.next(!this.isChecked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: CheckboxComponent, deps: [{ token: ThemeService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.4", type: CheckboxComponent, isStandalone: true, selector: "ber-in-check", inputs: { type: "type" }, outputs: { checkedStateChange: "checkedStateChange" }, ngImport: i0, template: "<input type=\"checkbox\" class=\"checkbox\"\n       [ngStyle]=\"{'border-color': color,\n       'background-color': isChecked ? color : 'transparent',\n       'color': fontColor\n       }\"\n       (change)=\"onChecked($event)\"\n>\n", styles: [".checkbox{height:1.5rem;width:1.5rem;appearance:none;box-sizing:border-box;border:.1rem solid;border-radius:.4rem;color:#000;font:inherit;display:grid;place-content:center}.checkbox:before{content:\"\";width:1rem;height:1rem;transform:scale(0);transition:.1s transform ease-in-out;box-shadow:inset 1rem 1rem;clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%)}.checkbox:checked:before{transform:scale(1)}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ber-in-check', standalone: true, imports: [
                        NgStyle
                    ], template: "<input type=\"checkbox\" class=\"checkbox\"\n       [ngStyle]=\"{'border-color': color,\n       'background-color': isChecked ? color : 'transparent',\n       'color': fontColor\n       }\"\n       (change)=\"onChecked($event)\"\n>\n", styles: [".checkbox{height:1.5rem;width:1.5rem;appearance:none;box-sizing:border-box;border:.1rem solid;border-radius:.4rem;color:#000;font:inherit;display:grid;place-content:center}.checkbox:before{content:\"\";width:1rem;height:1rem;transform:scale(0);transition:.1s transform ease-in-out;box-shadow:inset 1rem 1rem;clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%)}.checkbox:checked:before{transform:scale(1)}\n"] }]
        }], ctorParameters: () => [{ type: ThemeService }], propDecorators: { type: [{
                type: Input
            }], checkedStateChange: [{
                type: Output
            }] } });

class InputCheckboxComponent {
    themeService;
    type;
    checkedStateChange = new EventEmitter();
    color;
    fontColor;
    hovered;
    isChecked = false;
    checked = new BehaviorSubject(false);
    checkedObservable = this.checked.asObservable();
    constructor(themeService) {
        this.themeService = themeService;
    }
    ngOnInit() {
        this.themeService.getThemeAsObservable().subscribe(() => {
            this.color = this.themeService.getCheckboxBackgroundColor(this.type);
            this.fontColor = this.themeService.getColorFont(this.type);
        });
        this.checkedObservable.subscribe((value) => {
            this.isChecked = value;
        });
    }
    onChecked(event) {
        // this.isChecked=!this.isChecked;
        this.checkedStateChange.emit(!this.isChecked);
        this.checked.next(!this.isChecked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: InputCheckboxComponent, deps: [{ token: ThemeService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.4", type: InputCheckboxComponent, isStandalone: true, selector: "bear-input-checkbox", inputs: { type: "type" }, outputs: { checkedStateChange: "checkedStateChange" }, ngImport: i0, template: "<input type=\"checkbox\" class=\"checkbox\"\n       [ngStyle]=\"{'border-color': color,\n       'background-color': isChecked ? color : 'transparent',\n       'color': fontColor\n       }\"\n       (change)=\"onChecked($event)\"\n>\n", styles: [".checkbox{height:1.5rem;width:1.5rem;appearance:none;box-sizing:border-box;border:.1rem solid;border-radius:.4rem;color:#000;font:inherit;display:grid;place-content:center}.checkbox:before{content:\"\";width:1rem;height:1rem;transform:scale(0);transition:.1s transform ease-in-out;box-shadow:inset 1rem 1rem;clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%)}.checkbox:checked:before{transform:scale(1)}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: InputCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bear-input-checkbox', imports: [
                        NgStyle
                    ], template: "<input type=\"checkbox\" class=\"checkbox\"\n       [ngStyle]=\"{'border-color': color,\n       'background-color': isChecked ? color : 'transparent',\n       'color': fontColor\n       }\"\n       (change)=\"onChecked($event)\"\n>\n", styles: [".checkbox{height:1.5rem;width:1.5rem;appearance:none;box-sizing:border-box;border:.1rem solid;border-radius:.4rem;color:#000;font:inherit;display:grid;place-content:center}.checkbox:before{content:\"\";width:1rem;height:1rem;transform:scale(0);transition:.1s transform ease-in-out;box-shadow:inset 1rem 1rem;clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0%,43% 62%)}.checkbox:checked:before{transform:scale(1)}\n"] }]
        }], ctorParameters: () => [{ type: ThemeService }], propDecorators: { type: [{
                type: Input
            }], checkedStateChange: [{
                type: Output
            }] } });

class InputTextComponent {
    themeService;
    type;
    textChanged = new EventEmitter();
    hovered = false;
    normalColor;
    hoveredColor;
    color;
    focused;
    text = "";
    constructor(themeService) {
        this.themeService = themeService;
    }
    ngOnInit() {
        this.themeService.getThemeAsObservable().subscribe(() => {
            this.normalColor = this.themeService.getInputOutlineColor(this.type);
            this.hoveredColor = this.themeService.getInputOutlineColorHovered(this.type);
            // this.hoveredColor="red";
            this.color = this.normalColor;
        });
    }
    onFocusIn() {
        this.color = this.hoveredColor;
        this.focused = true;
    }
    onFocusOut() {
        this.color = this.normalColor;
        this.focused = false;
    }
    onInput(event) {
        this.text = event.target.value;
        this.textChanged.emit(this.text);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: InputTextComponent, deps: [{ token: ThemeService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.4", type: InputTextComponent, isStandalone: true, selector: "bear-input-text", inputs: { type: "type" }, outputs: { textChanged: "textChanged" }, ngImport: i0, template: "<!--(mouseenter)=\"onMouseEnter()\" (mouseleave)=\"onMouseLeave()\"-->\n<div class=\"group\">\n    <input type=\"text\" class=\"text-input input\"\n           [ngStyle]=\"{'outline-color': color}\"\n           (focusin)=\"onFocusIn()\"\n           (focusout)=\"onFocusOut()\"\n           (input)=\"onInput($event)\">\n    <label class=\"label\" [ngClass]=\"{'focusedInputLabel' : focused || text.length>0}\"><ng-content></ng-content></label>\n</div>\n", styles: [".text-input{outline:solid;outline-width:.2rem;border-radius:.3rem;border:none;width:18rem;height:1.5rem;padding:1rem;font-size:1.2rem}input:focus{outline:solid;outline-width:.2rem;background-color:#fff}.focusedInputLabel{border-radius:.1rem;padding:.3rem!important;left:2rem!important;background-color:#fff;transition:all .2s ease-in-out;position:absolute;transform:translateY(-60%) scale(.9);margin:0!important}.group{height:1.5rem;width:18rem;font-family:Tahoma,sans-serif;margin:1rem}.group .label{position:absolute;left:1rem;padding:1rem;font-size:1rem;pointer-events:none;transition:all .2s ease-in-out}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.4", ngImport: i0, type: InputTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bear-input-text', imports: [
                        NgClass,
                        NgStyle
                    ], template: "<!--(mouseenter)=\"onMouseEnter()\" (mouseleave)=\"onMouseLeave()\"-->\n<div class=\"group\">\n    <input type=\"text\" class=\"text-input input\"\n           [ngStyle]=\"{'outline-color': color}\"\n           (focusin)=\"onFocusIn()\"\n           (focusout)=\"onFocusOut()\"\n           (input)=\"onInput($event)\">\n    <label class=\"label\" [ngClass]=\"{'focusedInputLabel' : focused || text.length>0}\"><ng-content></ng-content></label>\n</div>\n", styles: [".text-input{outline:solid;outline-width:.2rem;border-radius:.3rem;border:none;width:18rem;height:1.5rem;padding:1rem;font-size:1.2rem}input:focus{outline:solid;outline-width:.2rem;background-color:#fff}.focusedInputLabel{border-radius:.1rem;padding:.3rem!important;left:2rem!important;background-color:#fff;transition:all .2s ease-in-out;position:absolute;transform:translateY(-60%) scale(.9);margin:0!important}.group{height:1.5rem;width:18rem;font-family:Tahoma,sans-serif;margin:1rem}.group .label{position:absolute;left:1rem;padding:1rem;font-size:1rem;pointer-events:none;transition:all .2s ease-in-out}\n"] }]
        }], ctorParameters: () => [{ type: ThemeService }], propDecorators: { type: [{
                type: Input
            }], textChanged: [{
                type: Output
            }] } });

/*
 * Public API Surface of bear-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BearLibraryComponent, BearLibraryService, BtnComponent, CheckboxComponent, InputCheckboxComponent, InputTextComponent, ThemeService };
//# sourceMappingURL=bear-library.mjs.map