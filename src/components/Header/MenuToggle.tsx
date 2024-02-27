import { Button, ButtonProps, ChakraComponent } from '@chakra-ui/react';
import { HiMenuAlt1 } from 'react-icons/hi';

type MenuToggleComponent = ChakraComponent<'button', { onOpen: () => void }>;
type MenuToggleProps = ButtonProps & {
  onOpen: () => void;
};

export const MenuToggle = ((props: MenuToggleProps) => {
  const { onOpen, ...rest } = props;

  return (
    <Button
      width='40px'
      height='40px'
      iconSpacing='0'
      leftIcon={<HiMenuAlt1 />}
      variant='outline'
      onClick={onOpen}
      {...rest}
    />
  );
}) as MenuToggleComponent;
