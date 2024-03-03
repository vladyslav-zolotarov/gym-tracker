import { UseToastOptions, useToast } from '@chakra-ui/react';

export const useSuccessToast = () => {
  const toast = useToast();

  const runToast = (options: UseToastOptions | undefined) =>
    toast({
      position: 'bottom-right',
      status: 'success',
      duration: 5000,
      isClosable: true,
      title: 'Success',
      ...options,
    });

  return runToast;
};
