import { pb } from '@lib/pocketbase';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useErrorToast, useSuccessToast } from '@hooks/index';

export const useLogOut = () => {
  const navigate = useNavigate();
  const successToast = useSuccessToast();
  const errorToast = useErrorToast();

  return useMutation({
    mutationFn: async () => pb.authStore.clear(),
    onSuccess: () => {
      navigate({ to: '/signin' });
      successToast({});
    },
    onError: error => {
      errorToast({
        title: `${error?.message}`,
        description: `${error?.name}`,
      });
    },
  });
};
