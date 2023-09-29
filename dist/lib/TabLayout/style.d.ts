import { CSSProperties } from "react";
export declare const getStyle: (menuDirection: "row" | "column") => {
    layout: {};
    menuContainer: CSSProperties;
    selectedMenuItem: CSSProperties;
    unselectedMenuItem: CSSProperties;
    content: CSSProperties;
    unselectedMenuITem?: undefined;
} | {
    layout: CSSProperties;
    menuContainer: CSSProperties;
    selectedMenuItem: CSSProperties;
    unselectedMenuITem: CSSProperties;
    content: CSSProperties;
    unselectedMenuItem?: undefined;
};
