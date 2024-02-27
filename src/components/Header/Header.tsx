import { Divider, Flex, useColorMode, useMediaQuery } from '@chakra-ui/react';
import { MenuToggle, ThemeToggle } from '@components/Header';
import { Logo } from '../AsideNavBar';

export const Header = ({
  isOpen,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
}) => {
  const { colorMode } = useColorMode();
  const [isTablet] = useMediaQuery('(min-width: 48em)');

  return (
    <header
      style={{
        width: '100%',
        position: isTablet ? 'relative' : 'sticky',
        top: '0',
        zIndex: '1',
        backgroundColor: isTablet
          ? ''
          : colorMode === 'dark'
            ? '#1e2433'
            : '#fff',
      }}>
      <Flex
        gap='1rem'
        height='100%'
        alignItems='center'
        padding='.9rem 0'>
        <Flex width='100%'>
          <Logo display={{ base: 'flex', md: 'none' }} />

          <ThemeToggle marginLeft='auto' />
          <MenuToggle
            display={{ base: 'flex', md: 'none' }}
            marginLeft='1rem'
            onOpen={onOpen}
          />
        </Flex>
      </Flex>
      <Divider />
    </header>
  );
};
