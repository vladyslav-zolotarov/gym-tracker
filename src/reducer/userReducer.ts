import { RecordAuthResponse } from 'pocketbase';
import { UsersResponse } from '@/types/pocketbase-types';

export enum UserActionsTypes {
  SetUser = 'SET_USER',
  DeleteUser = 'DELETE_USER',
}

export type UserActions = {
  type: UserActionsTypes.SetUser | UserActionsTypes.DeleteUser;
  payload: RecordAuthResponse<UsersResponse> | undefined;
};

export const userReducer = (
  state: RecordAuthResponse<UsersResponse> | undefined,
  action: UserActions
): RecordAuthResponse<UsersResponse> | undefined => {
  switch (action.type) {
    case UserActionsTypes.SetUser:
      if (action.payload === undefined) return;
      return {
        ...state,
        record: {
          id: action.payload.record.id,
          name: action.payload.record.name,
          username: action.payload.record.username,
          email: action.payload.record.email,
          emailVisibility: action.payload.record.emailVisibility,
          avatar: action.payload.record.avatar,
          collectionId: action.payload.record.collectionId,
          collectionName: action.payload.record.collectionName,
          created: action.payload.record.created,
          updated: action.payload.record.updated,
          verified: action.payload.record.verified,
        },
        token: action.payload?.token,
      };
    case UserActionsTypes.DeleteUser:
      return undefined;

    default:
      return state;
  }
};
