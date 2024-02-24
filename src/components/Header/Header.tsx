import { Flex, useDisclosure } from '@chakra-ui/react';
import { MenuAdditional, MenuToggle, ThemeToggle } from '@components/Header';

export const Header = () => {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <header style={{ height: '82px' }}>
      <Flex
        gap='1rem'
        height='100%'
        alignItems='center'>
        <Flex
          width='100%'
          justifyContent='flex-end'>
          <ThemeToggle />
          <MenuAdditional />

          <MenuToggle
            isOpen={isOpen}
            onOpen={onOpen}
          />
        </Flex>
      </Flex>
    </header>
  );
};
