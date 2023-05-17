import { DefaultTheme } from 'styled-components';

const colors = {
  Primary: '#17CCE4',
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
  red: '#FF4F4F',
};

const H1 = {
  LineHight: '48px',
  FontSize: '32px',
  FontWeight: '600'
}

const H2 = {
  LineHight: '42px',
  FontSize: '28px',
  FontWeight: '600'
}

const H3 = {
  LineHight: '36px',
  FontSize: '24px',
  FontWeight: '600'
}

const SubTit1 = {
  LineHight: '30px',
  FontSize: '20px',
  FontWeight: '600'
}

const SubTit2 = {
  LineHight: '27px',
  FontSize: '18px',
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
  LineHight: '18px',
  FontSize: '16px',
  FontWeight: '600'
}

const Caption1 = {
  LineHight: '21px',
  FontSize: '14px',
  FontWeight: '400'
}

const Radius = {
  BRadius: '8px'
}

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
  H1,
  H2,
  H3,
  Body1,
  Body2,
  SubTit1,
  SubTit2,
  Button1,
  Caption1,
  Radius
};