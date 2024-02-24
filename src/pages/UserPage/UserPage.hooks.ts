import { useMutation } from '@tanstack/react-query';
import { pb } from '@lib/pocketbase';
import { UserType } from '@pages/UserPage/UserPage.schema';
import { useErrorToast, useSuccessToast } from '@hooks/index';

export const useUserUpdate = () => {
  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  return useMutation({
    mutationFn: async (data: UserType) => {
      await pb.collection('users').update(data.id, data);
    },
    onSuccess: () => {
      successToast({
        description: 'Your changes are saved successfully',
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
