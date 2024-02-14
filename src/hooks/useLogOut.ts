import { pb } from '@lib/pocketbase';
import { useToast } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

export const useLogOut = () => {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation({
    mutationFn: async () => pb.authStore.clear(),
    onSuccess: () => {
      navigate({ to: '/signin' });
      toast({
        position: 'bottom-right',
        description: 'Successible',
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
