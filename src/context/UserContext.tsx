import { RecordAuthResponse } from 'pocketbase';
import { Dispatch, createContext, useContext, useReducer } from 'react';
import { UsersResponse } from '@/types/pocketbase-types';
import { UserActions, userReducer } from '@/reducer/userReducer';

export const UserContext = createContext<{
  state: RecordAuthResponse<UsersResponse> | undefined;
  dispatch: Dispatch<UserActions>;
}>({ state: undefined, dispatch: () => null });

export const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(userReducer, undefined);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used within useUserContext');
  }

  return context;
};
