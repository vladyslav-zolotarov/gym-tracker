import { useRouterState } from '@tanstack/react-router';
import { Box, Divider, useDisclosure } from '@chakra-ui/react';
import {
  MenuLinks,
  MenuToggle,
  NavBarContainer,
  Logo,
} from '@components/NavBar';

export const NavBar = () => {
  const router = useRouterState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (
    router.location.pathname === '/signin' ||
    router.location.pathname === '/signup'
  ) {
    return;
  }

  return (
    <Box marginBottom='20px'>
      <NavBarContainer>
        <Logo />
        <MenuLinks
          isOpen={isOpen}
          onClose={onClose}
        />
        <MenuToggle
          isOpen={isOpen}
          onOpen={onOpen}
        />
      </NavBarContainer>
      <Divider />
    </Box>
  );
};
