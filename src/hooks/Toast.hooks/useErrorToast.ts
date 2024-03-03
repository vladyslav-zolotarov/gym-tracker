import { UseToastOptions, useToast } from '@chakra-ui/react';

export const useErrorToast = () => {
  const toast = useToast();

  const runToast = (options: UseToastOptions | undefined) =>
    toast({
      position: 'bottom-right',
      status: 'error',
      duration: 5000,
      isClosable: true,
      title: 'Error',
      ...options,
    });

  return runToast;
};
