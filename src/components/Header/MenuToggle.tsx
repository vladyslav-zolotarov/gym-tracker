import { Button, ButtonProps, ChakraComponent } from '@chakra-ui/react';
import { HiMenuAlt1 } from 'react-icons/hi';

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
      width='40px'
      height='40px'
      iconSpacing='0'
      leftIcon={<HiMenuAlt1 />}
      variant='outline'
      onClick={props.onOpen}
      {...props}
    />
  );
}) as MenuToggleComponent;
