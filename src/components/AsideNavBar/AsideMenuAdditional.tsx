import { Button, Flex } from '@chakra-ui/react';
import { PocketBaseAuth, useLogOut } from '@hooks/index';
import { AsideMenuItem } from '@components/AsideNavBar/index';

export const AsideMenuAdditional = ({
  user,
}: {
  user: PocketBaseAuth | undefined;
}) => {
  const { mutate } = useLogOut();
  return (
    <Flex
      direction='column'
      gap='1rem'>
      {!user ? (
        <>
          <AsideMenuItem to='/signup'>Sign up</AsideMenuItem>
          <AsideMenuItem to='/signin'>Sign in</AsideMenuItem>
        </>
      ) : (
        <Button
          variant='outline'
          onClick={() => mutate()}>
          Logout
        </Button>
      )}
    </Flex>
  );
};
