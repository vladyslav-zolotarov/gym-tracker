import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { pb } from '@lib/pocketbase';
import { SignInFormType } from '@pages/SignInPage/SignInPage.schema';
import { Collections, UsersResponse } from '@/types/pocketbase-types';
import { useErrorToast, useSuccessToast } from '@hooks/index';

export const useSignIn = () => {
  const navigate = useNavigate();
  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  return useMutation({
    mutationFn: async ({ email, password }: SignInFormType) => {
      await pb
        .collection(Collections.Users)
        .authWithPassword<UsersResponse>(email, password),
        pb.collection(Collections.Users).subscribe(
          '*',
          function (e) {
            console.log(e.action);
            console.log(e.record);
          },
          {
            /* other options like expand, custom headers, etc. */
          }
        );
    },
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
