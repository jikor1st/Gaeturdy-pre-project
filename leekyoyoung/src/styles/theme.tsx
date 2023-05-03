import { DefaultTheme } from 'styled-components';

const colors = {
  Primary: '#27C8EC',
  Gray50: '#FAFAFA',
  Gray100: '#F5F5F5',
  Gray200: '#EEEEEE',
  Gray300: '#E0E0E0',
  Gray400: '#BDBDBD',
  Gray500: '#9E9E9E',
  Gray600: '#757575',
  Gray700: '#616161',
  Gray800: '#424242',
  Gray900: '#212121',
  white: '#ffffff',
  red: '#FF7070',
};

const H1 = {
  LineHight: '36px',
  FontSize: '24px',
  FontWeight: '600'
}

const Body1 = {
  LineHight: '24px',
  FontSize: '16px',
  FontWeight: '500'
}

const Body2 = {
  LineHight: '21px',
  FontSize: '14px',
  FontWeight: '500'
}

const Button1 = {
  LineHight: '16px',
  FontSize: '16px',
  FontWeight: '600'
}

const Radius = {
  BRadius: '8px'
}

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
  H1,
  Body1,
  Body2,
  Button1,
  Radius
};