import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import '@fontsource/ubuntu';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Ubuntu', sans-serif`,
    body: `'Ubuntu', sans-serif`,
  },
  components: {
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
