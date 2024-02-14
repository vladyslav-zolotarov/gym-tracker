import { Button } from '@chakra-ui/react';
import { useCheckAuth, useLogOut } from '@hooks/index';
import { MenuItem } from '@components/NavBar';

export const MenuAdditional = () => {
  const auth = useCheckAuth();
  const { mutate } = useLogOut();

  return (
    <>
      {!auth ? (
        <>
          <MenuItem to='/signup'>
            <Button
              as='div'
              variant='outline'>
              Sign up
            </Button>
          </MenuItem>
          <MenuItem to='/signin'>
            <Button
              as='div'
              variant='ghost'>
              Sign in
            </Button>
          </MenuItem>{' '}
        </>
      ) : (
        <Button
          variant='outline'
          onClick={() => mutate()}>
          Logout
        </Button>
      )}
    </>
  );
};