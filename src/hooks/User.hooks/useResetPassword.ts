import { useMutation } from '@tanstack/react-query';
import { pb } from '@lib/pocketbase';
import { ResetPasswordType } from '@pages/UserPage/UserPage.schema';
import { useErrorToast, useSuccessToast } from '@hooks/index';

export const useResetPassword = () => {
  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  return useMutation({
    mutationFn: async ({
      newPassword,
      newPasswordConfirm,
      oldPassword,
    }: ResetPasswordType) => {
      await pb.collection('users').update(pb.authStore.model?.id, {
        oldPassword: oldPassword,
        password: newPassword,
        passwordConfirm: newPasswordConfirm,
      });
    },
    onSuccess: async () => {
      successToast({
        description: 'Your account has been successfully created',
      });
    },
    onError: error => {
      errorToast({
        description: `${error?.message}`,
      });
    },
  });
};
