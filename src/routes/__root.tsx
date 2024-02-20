import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { Box, Container, Divider, Text } from '@chakra-ui/react';
import { NavBar } from '@components/NavBar/index';
import { QueryClient } from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Container
        display='flex'
        flexDirection='column'
        w='100%'
        h='100%'
        maxW='1400px'
        minHeight='100vh'>
        <header>
          <NavBar />
        </header>

        <Box marginBottom='auto'>
          <Outlet />
        </Box>

        <footer style={{ marginTop: '1rem' }}>
          <Divider />
          <Text
            padding='1rem'
            textAlign='center'
            fontSize='.8rem'>
            © 2024 GYMTRACKER, eLGR1M
          </Text>
        </footer>
      </Container>

      <ReactQueryDevtools />
    </>
  );
}
