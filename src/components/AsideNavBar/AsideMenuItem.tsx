import { ChakraComponent, ButtonProps, Button } from '@chakra-ui/react';
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from '@tanstack/react-router';

type MenuItemProps = ChakraComponent<'button', ReactRouterLinkProps>;

export const AsideMenuItem = ((props: ButtonProps) => {
  const { children } = props;

  return (
    <Button
      as={ReactRouterLink}
      variant='ghost'
      gap='1rem'
      size='lg'
      padding='0 1rem'
      justifyContent='flex-start'
      {...props}>
      {children}
    </Button>
  );
}) as MenuItemProps;
