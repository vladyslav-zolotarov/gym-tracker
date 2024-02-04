import { pb } from '@/lib/pocketbase';
import { useMutation } from '@tanstack/react-query';
import { Collections, UsersResponse } from '@/types/pocketbase-types';
import { SignInForm } from '@/types/form-types';
import { useToast } from '@chakra-ui/react';

export const useSignIn = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: async ({ email, password }: SignInForm) =>
      await pb
        .collection(Collections.Users)
        .authWithPassword<UsersResponse>(email, password),
    onSuccess: () => {
      toast({
        position: 'bottom-right',
        description: 'Successible authentication',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    },
    onError: error => {
      toast({
        position: 'bottom-right',
        title: `${error?.message}`,
        description: `${error?.name}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });
};

export const useSignInGoogle = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: async () =>
      await pb
        .collection(Collections.Users)
        .authWithOAuth2<UsersResponse>({ provider: 'google' }),
    onSuccess: () => {
      toast({
        position: 'bottom-right',
        description: 'Successible authentication',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    },
    onError: error => {
      toast({
        position: 'bottom-right',
        description: `${error?.message}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    },
  });
};