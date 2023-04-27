import 'styled-components';
import { ColorsTypes } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ColorsTypes;
        H1: {
            LineHight: string;
            FontSize: string;
            FontWeight: string;
        };
        Body1: {
            LineHight: string;
            FontSize: string;
            FontWeight: string;
        };
        Body2: {
            LineHight: string;
            FontSize: string;
            FontWeight: string;
        };
        Button1: {
            LineHight: string;
            FontSize: string;
            FontWeight: string;
        };
        Radius : {
            BRadius: string;
        }
    }
}