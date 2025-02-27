import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    color: {
        black: "#171717",
        gray: "#676767",
        blue: "#4e59bd",
        white: "#ffffff",
        gradient: "linear-gradient(128.93deg, #00ADB5 22.41%, #393E46 93.45%)",

        green: "#346751",
        red: "#fa6748",
        baige: "#F9F3DD",
        orange :"#DF8350",
        lightBlue: "#0692d0",
        neonGreen: "#00FF94",
    },
};

const customMediaQuery = (maxWidth: number): string =>
    `@media (max-width: ${maxWidth}px)`;

export const media = {
    custom: customMediaQuery,
    laptop: customMediaQuery(1440),
    tablet: customMediaQuery(800),
    mobile: customMediaQuery(420),
};