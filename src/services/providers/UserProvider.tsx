import { useReducer } from 'react';
import { userReducer } from '@services/reducers/userReducer';
import { UserContext } from '@services/state/userContext';

export const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(userReducer, undefined);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
