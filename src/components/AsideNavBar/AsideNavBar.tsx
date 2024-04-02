import { useRef } from 'react';
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  AsideMenuLinks,
  Logo,
  AsideUser,
  AsideMenuAdditional,
} from '@components/AsideNavBar';
import { useAuth } from '@/contexts/auth.context';

export const AsideNavBar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { colorMode } = useColorMode();
  const { user } = useAuth();
  const btnRef = useRef(null);

  const [isDesktop] = useMediaQuery('(min-width: 80em)');

  const asideContent = () => {
    return (
      <aside style={{ width: '100%', height: '100%' }}>
        <Flex
          padding='0 1rem'
          direction='column'
          height='calc(100% - 153px)'
          overflow={{ base: 'auto', xl: 'hidden' }}
          _hover={{
            xl: { overflow: 'auto' },
          }}>
          <Logo
            backgroundColor={colorMode === 'dark' ? '#1a202c' : '#fff'}
            zIndex='1'
            position='sticky'
            top='0'
            padding='1rem'
            marginBottom='.5rem'
          />
          <AsideMenuLinks />
        </Flex>
        <Flex
          padding='1rem'
          direction='column'
          gap='1rem'>
          <Divider />
          <AsideUser user={user} />
          <AsideMenuAdditional user={user} />
        </Flex>
      </aside>
    );
  };

  if (isDesktop) {
    return <>{asideContent()}</>;
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            backgroundColor={colorMode === 'dark' ? '#1a202c' : '#fff'}
            padding='0'
            onClick={onClose}>
            {asideContent()}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
