import { Box, Button, Container, useColorMode } from '@chakra-ui/react';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { UserProvider } from '@services/providers/UserProvider';

function App() {
  // const [userState, dispatch] = useReducer(userReducer, undefined);
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    // <UserContext.Provider value={userState}>
    <UserProvider>
      <Container
        w='100%'
        h='100%'
        minHeight='100vh'>
        <Box
          maxW='1400px'
          minHeight='100vh'
          h='100%'>
          <SignInPage />
          {/* <Button
          colorScheme='whatsapp'
          onClick={toggleColorMode}>
          Toggle to {colorMode === 'dark' ? 'light' : 'dark'} mode
        </Button> */}
        </Box>
      </Container>
    </UserProvider>
    // </UserContext.Provider>
  );
}

export default App;
