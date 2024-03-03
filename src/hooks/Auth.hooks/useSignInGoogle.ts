import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { pb } from '@lib/pocketbase';
import { Collections, UsersResponse } from '@/types/pocketbase-types';
import { useErrorToast, useSuccessToast } from '@hooks/index';

export const useSignInGoogle = () => {
  const navigate = useNavigate();
  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  return useMutation({
    mutationFn: async () =>
      await pb
        .collection(Collections.Users)
        .authWithOAuth2<UsersResponse>({ provider: 'google' }),
    onSuccess: () => {
      navigate({ to: '/home' });
      successToast({ description: 'Successful authentication' });
    },
    onError: error => {
      errorToast({
        title: `${error?.message}`,
        description: `${error?.name}`,
      });
    },
  });
};
