import { ChakraComponent, Flex, FlexProps } from '@chakra-ui/react';

type NavBarContainerProps = ChakraComponent<'div', {}>;

export const NavBarContainer = ((props: FlexProps) => {
  const { children } = props;
  return (
    <Flex
      p='16px 0'
      justifyContent='space-between'
      {...props}>
      {children}
    </Flex>
  );
}) as NavBarContainerProps;
