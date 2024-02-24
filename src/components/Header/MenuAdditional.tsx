import { Button } from '@chakra-ui/react';
import { useAuthCheck, useLogOut } from '@hooks/index';
import { AsideMenuItem } from '@/components/AsideNavBar';

export const MenuAdditional = () => {
  const auth = useAuthCheck();
  const { mutate } = useLogOut();

  return (
    <>
      {!auth ? (
        <>
          <AsideMenuItem to='/signup'>
            <Button
              as='div'
              variant='outline'>
              Sign up
            </Button>
          </AsideMenuItem>
          <AsideMenuItem to='/signin'>
            <Button
              as='div'
              variant='ghost'>
              Sign in
            </Button>
          </AsideMenuItem>
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
