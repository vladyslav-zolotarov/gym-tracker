import { Image, Flex, Heading, FlexProps } from '@chakra-ui/react';
import LogoIcon from '@assets/icons/logo-1.webp';

export const Logo = (props: FlexProps) => {
  return (
    <Flex
      alignItems='center'
      gap='1rem'
      {...props}>
      <Image
        height={{ base: '40px', md: '50px' }}
        width={{ base: '40px', md: '50px' }}
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
