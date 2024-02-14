import { pb } from '@/lib/pocketbase';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useToast } from '@chakra-ui/react';
import { TFormInputs } from '@/types/form-types';
import { Collections, UsersResponse } from '@/types/pocketbase-types';

export const useSignIn = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: async ({ email, password }: TFormInputs) =>
      await pb
        .collection(Collections.Users)
        .authWithPassword<UsersResponse>(email, password),
    onSuccess: () => {
      navigate({ to: '/home' });
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
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: async () =>
      await pb
        .collection(Collections.Users)
        .authWithOAuth2<UsersResponse>({ provider: 'google' }),
    onSuccess: () => {
      navigate({ to: '/home' });
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
