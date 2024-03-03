import { pb } from '@lib/pocketbase';

export type PocketBaseAuth = {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  updated: string;
  username: string;
  verified: boolean;
};

export const useAuthCheck = (): PocketBaseAuth | undefined => {
  const authString = pb.authStore.model || undefined;

  if (!authString) {
    return;
  }

  return authString as PocketBaseAuth;
};
