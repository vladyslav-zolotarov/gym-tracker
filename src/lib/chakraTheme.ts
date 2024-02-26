import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import '@fontsource/ubuntu';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

const theme = extendTheme({
  styles: {
    global: {
      '::-webkit-scrollbar': {
        width: '0.5rem',
        bgColor: 'transparent',
      },
      '::-webkit-scrollbar-thumb': {
        bgColor: 'rgba(183, 194, 218, 0.12)',
      },
      '*': {
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(183, 194, 218, 0.12) transparent',
        scrollbarGutter: 'stable',
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        padding: { base: '.5rem 0', md: '1rem 0' },
        marginBottom: '1rem',
        textAlign: 'center',
      },
      defaultProps: {
        as: 'h2',
        size: 'lg',
      },
    },
    Link: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : '#17242A',
        _hover: {
          color: props.colorMode === 'dark' ? '#b7c2da' : '#314e89',
          textDecoration: 'none',
        },
      }),
    },
    Button: {
      defaultProps: {
        colorScheme: 'facebook',
      },
    },
    Card: {
      defaultProps: {
        variant: 'outline',
      },
      baseStyle: {
        container: {
          padding: '1.2rem',
          gap: '1.2rem',
        },
      },
    },
  },
});

export default theme;
