import * as i0 from "@angular/core";
export interface Theme {
    primary: string;
    primaryActive: string;
    secondary: string;
    secondaryActive: string;
    accent: string;
    accentActive: string;
    info: string;
    infoActive: string;
    success: string;
    warning: string;
    error: string;
    neutral: string;
    background: string;
}
export declare class ThemeService {
    private theme;
    themeObservable: import("rxjs").Observable<string>;
    themes: Theme[];
    constructor();
    ngOnInit(): void;
    setTheme(theme: string): void;
    getTheme(): string;
    getThemeIndex(): number;
    getThemeAsObservable(): import("rxjs").Observable<string>;
    getPrimary(): string;
    getPrimaryActive(): string;
    getSecondary(): string;
    getAccent(): string;
    getInfo(): string;
    getSuccess(): string;
    getWarning(): string;
    getError(): string;
    getButtonBackgroundColor(color: string): string;
    getCheckboxBackgroundColor(color: string): string;
    getInputOutlineColor(color: string): string;
    getInputOutlineColorHovered(color: string): string;
    getColorFont(color: string): "black" | "white";
    getBackground(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ThemeService>;
}
