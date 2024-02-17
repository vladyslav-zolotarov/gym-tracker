import { pb } from '@lib/pocketbase';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { SignUpFormType } from '@pages/SignUpPage/SignUpPage.schema';
import { useErrorToast, useSuccessToast } from '@hooks/index';

export const useSignUp = () => {
  const navigate = useNavigate();
  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  return useMutation({
    mutationFn: async (data: SignUpFormType) => {
      console.log('data', data);
      await pb.collection('users').create(data);
    },
    onSuccess: () => {
      navigate({ to: '/home' });
      successToast({
        description: 'Your account has been successfully created',
      });
    },
    onError: error => {
      errorToast({
        title: `${error?.message}`,
        description: `${error?.name}`,
      });
    },
  });
};
