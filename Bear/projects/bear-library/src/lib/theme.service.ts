import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

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

const themes: Theme[]=[
    {//light
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
    {//dark
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

    getPrimaryActive()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.primaryActive;
        return color;
    }

    getSecondary()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.secondary;
        return color;
    }

    getAccent()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.accent;
        return color;
    }

    getInfo()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.info;
        return color;
    }

    getSuccess()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.success;
        return color;
    }

    getWarning()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.warning;
        return color;
    }

    getError()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.error;
        return color;
    }

    getButtonBackgroundColor(color: string)
    {
        switch(color)
        {
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

    getCheckboxBackgroundColor(color: string)
    {
        switch(color)
        {
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

    getInputOutlineColor(color: string)
    {
        switch(color)
        {
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

    getInputOutlineColorHovered(color: string)
    {
        switch(color)
        {
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

    getColorFont(color: string)
    {
        if (color=="accent" || color=="info" || color=="success" || color=="warning" || color=="error") return "black";
        else return "white";
    }

    getBackground()
    {
        let color: string;
        color = this.themes?.[this.getThemeIndex()]?.background;
        return color;
    }
}
