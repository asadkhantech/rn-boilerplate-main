import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
export const defaultTheme = {
    ...PaperDefaultTheme,
    colors: {
        ...PaperDefaultTheme.colors,
        primary: 'black',
        accent: 'white',
        background: '#FFFFFF',
        heading: "#0C0C0C",
        Signin: "#FFFFFF",
    },
};

export default defaultTheme;
