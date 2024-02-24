import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { Box, Divider, Grid, GridItem, Text } from '@chakra-ui/react';
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
    <Grid
      padding='0 1rem'
      templateAreas={`'aside container'`}
      gridTemplateColumns={'22rem 1fr'}
      gap={'2rem'}
      minHeight='100vh'>
      <GridItem
        area={'aside'}
        display='flex'>
        <AsideNavBar />
      </GridItem>

      <GridItem
        display='flex'
        flexDirection='column'
        area={'container'}>
        <Box marginBottom='auto'>
          <Header />
          <Divider />

          <Box
            maxWidth='1400px'
            width='100%'
            margin='1rem auto 0'>
            <Outlet />
          </Box>
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
      </GridItem>
    </Grid>
  );
}
