import { Box, Divider, Flex, useDisclosure } from '@chakra-ui/react';
import { AsideMenuLinks, Logo } from '@/components/AsideNavBar';

export const AsideNavBar = () => {
  const { isOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <aside>
        <Box paddingRight='1rem'>
          <Logo
            padding='1rem 1.5rem'
            height='100%'
            width='22rem'
            marginBottom='2rem'
          />
          <AsideMenuLinks
            isOpen={isOpen}
            onClose={onClose}
          />
        </Box>
      </aside>

      <Divider orientation='vertical' />
    </Flex>
  );
};
