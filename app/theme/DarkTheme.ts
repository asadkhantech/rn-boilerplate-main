import { MD3DarkTheme as PaperDarkTheme } from 'react-native-paper';

const darkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    primary: 'white',
    accent: 'black',
    background: '#0C0C0C',
    heading: "#FFFFFF",
    Signin: "#0C0C0C",
  },
};

export default darkTheme;
