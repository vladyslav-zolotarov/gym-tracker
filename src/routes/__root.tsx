import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Box, Container } from '@chakra-ui/react';
import { NavBar } from '@/components/NavBar/index';

export const Route = createRootRoute({
  component: () => (
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
  ),
});
