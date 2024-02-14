import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { Box, Container } from '@chakra-ui/react';
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
        w='100%'
        h='100%'
        maxW='1400px'
        minHeight='100vh'>
        <header>
          <NavBar />
        </header>

        <Box>
          <Outlet />
        </Box>
      </Container>

      <ReactQueryDevtools />
    </>
  );
}
