import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import {
  Box,
  Container,
  Flex,
  Text,
  useColorMode,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { AsideNavBar } from '@components/AsideNavBar/index';
import { Header, MenuToggle } from '@components/Header';
import { AuthContext, useAuth } from '@/contexts/auth.context';

export const Route = createRootRouteWithContext<{
  auth: AuthContext;
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  const auth = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  // base: "0em", // 0px
  // md: "48em", // ~768px
  // lg: "62em", // ~992px
  // xl: "80em",

  if (!auth.isAuthenticated) {
    return (
      <Box
        padding='0 1rem'
        minHeight='100vh'>
        <Box marginBottom='auto'>
          <Box
            maxWidth='1400px'
            width='100%'
            margin='1rem auto 0'>
            <Outlet />
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Flex>
      <VStack
        padding='1rem'
        display={{ base: 'none', md: 'flex', xl: 'none' }}>
        <MenuToggle onOpen={onOpen} />
      </VStack>

      <VStack
        width={{ base: '0', xl: '22rem' }}
        height='100vh'>
        <AsideNavBar
          isOpen={isOpen}
          onClose={onClose}
        />
      </VStack>

      <VStack
        height='100vh'
        overflow={{ base: 'auto', xl: 'hidden' }}
        _hover={{
          xl: { overflow: 'auto' },
        }}
        backgroundColor={colorMode === 'dark' ? '#202736b0' : '#ededed47'}
        width={{ base: '100%', xl: 'calc(100% - 22rem)' }}
        padding='0 1rem'>
        <Header
          isOpen={isOpen}
          onOpen={onOpen}
        />

        <Container
          padding={{ base: '0' }}
          maxWidth='1400px'
          marginBottom='auto'>
          <Outlet />
        </Container>
        <footer style={{ marginTop: '1rem', width: '100%' }}>
          <Text
            padding='1rem'
            textAlign='center'
            fontSize='.8rem'>
            © 2024 GYMTRACKER, eLGR1M
          </Text>
        </footer>
      </VStack>
    </Flex>
  );
}
