import { Flex, useDisclosure } from '@chakra-ui/react';
import {
  AsideMenuLinks,
  Logo,
  AsideUser,
  AsideMenuAdditional,
} from '@/components/AsideNavBar';
import { useAuthCheck } from '@hooks/index';

export const AsideNavBar = () => {
  const { isOpen, onClose } = useDisclosure();
  const user = useAuthCheck();

  return (
    <aside style={{ width: '100%' }}>
      <Flex direction='column'>
        <Logo
          padding='1rem 1.5rem'
          marginBottom='2rem'
        />
        <AsideMenuLinks
          isOpen={isOpen}
          onClose={onClose}
        />

        <AsideMenuAdditional user={user} />
      </Flex>

      <AsideUser user={user} />
    </aside>
  );
};
