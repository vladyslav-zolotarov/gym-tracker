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
      gap='5px'
      display='flex'
      alignItems='center'
      fontSize='xl'
      fontWeight='700'
      {...props}>
      {children}
    </LinkChakra>
  );
}) as MenuItemProps;
