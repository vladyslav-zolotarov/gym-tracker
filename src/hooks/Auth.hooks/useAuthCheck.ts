import { Collections, UsersResponse } from '@/types/pocketbase-types';
import { pb } from '@lib/pocketbase';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useAuthCheck = (): {
  isAuthenticated: boolean;
  user: UsersResponse;
} => {
  const user = pb.authStore.model || undefined;
  const isAuthenticated = !!user;

  return { isAuthenticated, user } as {
    isAuthenticated: boolean;
    user: UsersResponse;
  };
};

export const useIsAuthenticated = () => {
  const [state, setState] = useState<boolean>();
  // console.log(
  //   'localStorage.getItem(pocketbase_auth)',
  //   localStorage.getItem('pocketbase_auth')
  // );
  useEffect(() => {
    if (localStorage.getItem('pocketbase_auth')) {
      setState(!!localStorage.getItem('pocketbase_auth'));
    }
  }, [localStorage.getItem('pocketbase_auth')]);

  return state;
};

export const getUserInfo = () => {
  const q = useQueryClient();

  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      // const token = localStorage.getItem('pocketbase_auth');

      // if (!token) {
      //   return undefined;
      // }

      // pb.authStore.save(token, null);
      // return await pb.collection(Collections.Users).authRefresh();

      return pb.authStore.model;
    },
  });

  console.log('kurwa', data);

  q.setQueryData(['user'], () => data);

  console.log('q', q);
};

export const auth = () => {
  const queryClient = useQueryClient();

  console.log(
    'fasfgasqueryClientqueryClientqueryClientqueryClient',
    queryClient
  );

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      return pb.authStore.model;
    },
  });
};
