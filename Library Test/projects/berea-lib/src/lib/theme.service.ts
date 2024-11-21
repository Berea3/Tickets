import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface Theme {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    background: string;
}

const themes: Theme[]=[
    {//light
        primary: "blue",
        secondary: "pink",
        accent: "green",
        neutral: "black",
        background: "white"
    },
    {//dark
        primary: "red",
        secondary: "pink",
        accent: "green",
        neutral: "black",
        background: "black"
    },
];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

    private theme = new BehaviorSubject<string>("");
    themeObservable=this.theme.asObservable();

    themes=themes;

    constructor() { }

    setTheme(theme: string)
    {
        console.log("changing theme");
        localStorage.setItem("theme",theme);
        this.theme.next(theme);
    }

    getTheme()
    {
        let theme: string | null;
        theme=localStorage.getItem("theme");
        if (theme==null) return "primary";
        else return theme;
    }

    getThemeIndex():number
    {
        let theme: string | null;
        theme=localStorage.getItem("theme");
        if (theme=="light") return 0;
        else return 1;
    }

    getThemeAsObservable()
    {
        return this.theme.asObservable();
    }

    getPrimary()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.primary;
        return color;
    }

    getSecondary()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.secondary;
        return color;
    }

    getBackground()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.background;
        return color;
    }
}
