import { Button } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInGoogle } from '@/hooks';

export const GoogleButton = () => {
  const { mutate: onSignInGoogle } = useSignInGoogle();

  return (
    <Button
      variant='outline'
      leftIcon={<FcGoogle />}
      onClick={() => onSignInGoogle()}>
      Continue with Google
    </Button>
  );
};
