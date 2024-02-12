import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import '@fontsource/raleway';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/800.css';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const fonts = {
  heading: `'Raleway', sans-serif`,
  body: `'Raleway', sans-serif`,
};

const theme = extendTheme({
  config,
  fonts,
});

export default theme;
