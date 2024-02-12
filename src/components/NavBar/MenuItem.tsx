import {
  ChakraComponent,
  LinkProps as LinkChakraProps,
  Link as LinkChakra,
} from '@chakra-ui/react';
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from '@tanstack/react-router';

type MenuItemProps = ChakraComponent<'link', ReactRouterLinkProps>;

export const MenuItem = ((props: LinkChakraProps) => {
  const { children } = props;

  return (
    <LinkChakra
      as={ReactRouterLink}
      fontSize='lg'
      fontWeight='500'
      {...props}>
      {children}
    </LinkChakra>
  );
}) as MenuItemProps;
