import { Dispatch, createContext, useContext } from 'react';
import { RecordAuthResponse } from 'pocketbase';
import { UsersResponse } from '@/types/pocketbase-types';
import { UserActions } from '@services/reducers/userReducer';

export const UserContext = createContext<{
  state: RecordAuthResponse<UsersResponse> | undefined;
  dispatch: Dispatch<UserActions>;
}>({ state: undefined, dispatch: () => null });

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used within useUserContext');
  }

  return context;
};
