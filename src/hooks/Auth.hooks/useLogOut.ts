import { pb } from '@lib/pocketbase';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useErrorToast, useSuccessToast } from '@hooks/index';
import { Collections } from '@/types/pocketbase-types';
import { useAuthUser } from '@/contexts/auth.context';

export const useLogOut = () => {
  const navigate = useNavigate();
  const successToast = useSuccessToast();
  const errorToast = useErrorToast();
  const { removeAuthUser } = useAuthUser();

  return useMutation({
    mutationFn: async () => {
      pb.authStore.clear();
      pb.collection(Collections.Users).unsubscribe('*');
    },
    onSuccess: () => {
      navigate({ to: '/signin' });
      removeAuthUser();
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
