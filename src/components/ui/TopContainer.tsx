import { Flex, FlexProps } from '@chakra-ui/react';

export const TopContainer = (props: FlexProps) => {
  const { children, ...rest } = props;

  return (
    <Flex
      marginBottom='1rem'
      padding='1rem 0'
      gap='1rem'
      {...rest}>
      {children}
    </Flex>
  );
};
