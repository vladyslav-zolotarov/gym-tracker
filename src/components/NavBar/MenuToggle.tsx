import { Button, ButtonProps, ChakraComponent } from '@chakra-ui/react';

type MenuToggleComponent = ChakraComponent<
  'button',
  { isOpen: boolean; onOpen: () => void }
>;
type MenuToggleProps = ButtonProps & {
  isOpen: boolean;
  onOpen: () => void;
};

export const MenuToggle = ((props: MenuToggleProps) => {
  return (
    <Button
      // leftIcon={
      //   <HamburgerIcon
      //     w={6}
      //     h={6}
      //   />
      // }
      iconSpacing='0'
      variant='solid'
      size='md'
      w='20px'
      display={{ base: 'flex', md: 'none' }}
      onClick={props.onOpen}>
      {props.children}
    </Button>
  );
}) as MenuToggleComponent;
