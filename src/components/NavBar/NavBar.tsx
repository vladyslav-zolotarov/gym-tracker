import { useDisclosure } from '@chakra-ui/react';
import {
  MenuLinks,
  MenuToggle,
  NavBarContainer,
  Logo,
} from '@components/NavBar';

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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
  );
};
