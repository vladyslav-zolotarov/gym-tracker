import { Flex, useDisclosure } from '@chakra-ui/react';
import { MenuToggle, ThemeToggle } from '@components/Header';

export const Header = () => {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <header style={{ width: '100%' }}>
      <Flex
        gap='1rem'
        height='100%'
        alignItems='center'
        padding='.9rem'>
        <Flex
          width='100%'
          justifyContent='flex-end'>
          <ThemeToggle />

          <MenuToggle
            isOpen={isOpen}
            onOpen={onOpen}
          />
        </Flex>
      </Flex>
    </header>
  );
};
