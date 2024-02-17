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
  },
  // styles: {
  //   global: (props: StyleFunctionProps) => ({
  //     'html, body': {
  //       background:
  //         props.colorMode === 'dark' ? 'blackAlpha.100' : 'whiteAlpha.100',
  //     },
  //   }),
  // },
});

export default theme;

// Button: {
//   // 1. We can update the base styles
//   baseStyle: {
//     fontWeight: 'bold', // Normally, it is "semibold"
//   },
//   // 2. We can add a new button size or extend existing
//   sizes: {
//     xl: {
//       h: '56px',
//       fontSize: 'lg',
//       px: '32px',
//     },
//   },
//   // 3. We can add a new visual variant
//   variants: {
//     'with-shadow': {
//       bg: 'red.400',
//       boxShadow: '0 0 2px 2px #efdfde',
//     },
//     // 4. We can override existing variants
//     solid: (props: StyleFunctionProps) => ({
//       bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
//     }),
//     // 5. We can add responsive variants
//     sm: {
//       bg: 'red.300',
//       fontSize: 'md',
//     },
//   },
//   // 6. We can overwrite defaultProps
//   defaultProps: {
//     size: 'lg', // default is md
//     variant: 'sm', // default is solid
//     colorScheme: 'green', // default is gray
//   },
// },
