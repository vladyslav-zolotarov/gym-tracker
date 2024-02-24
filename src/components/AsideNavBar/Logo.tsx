import { Avatar, Flex, Heading, FlexProps } from '@chakra-ui/react';
import LogoIcon from '@assets/icons/logo-1.webp';

export const Logo = (props: FlexProps) => {
  return (
    <Flex
      alignItems='center'
      gap='1rem'
      {...props}>
      <Avatar
        height='50px'
        width='50px'
        src={LogoIcon}
      />
      <Heading
        padding='0'
        margin='0'>
        GymTracker
      </Heading>
    </Flex>
  );
};
