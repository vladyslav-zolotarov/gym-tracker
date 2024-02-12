import { useEffect } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { UserProvider } from '@services/providers/UserProvider';
import { useUserContext } from '@services/state/userContext';
import { UserActionsTypes } from '@services/reducers/userReducer';

function App() {
  // const [userState, dispatch] = useReducer(userReducer, undefined);

  // const { dispatch } = useUserContext();

  // useEffect(() => {
  //   const token = localStorage.getItem('pocketbase_auth');
  //   if (!token) {
  //     return;
  //   }

  //   dispatch({
  //     type: UserActionsTypes.SetUser,
  //     payload: JSON.parse(token).model,
  //   });
  // }, []);

  return (
    <UserProvider>
      <Box
        maxW='1400px'
        // minHeight='100vh'
        h='100%'>
        {/* <SignInPage /> */}
      </Box>
    </UserProvider>
  );
}

export default App;
