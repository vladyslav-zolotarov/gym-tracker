import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { Box, Container, Flex, Text, VStack } from '@chakra-ui/react';
import { AsideNavBar } from '@components/AsideNavBar/index';
import { Header } from '@components/Header';
import { useIsAuthPageType } from '@hooks/index';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  const { isAuthPageType } = useIsAuthPageType();

  if (isAuthPageType || isAuthPageType === undefined) {
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
        width='22rem'
        padding='0 1rem'>
        <AsideNavBar />
      </VStack>
      <VStack
        width='calc(100% - 22rem)'
        padding='0 1rem'>
        <Header />
        <Container maxWidth='1400px'>
          <Outlet />
        </Container>

        <footer style={{ marginTop: '1rem', width: '100%' }}>
          {/* <Divider /> */}
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
