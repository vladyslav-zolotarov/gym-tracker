import { Image, Flex, Heading, FlexProps } from '@chakra-ui/react';
import LogoIcon from '@assets/icons/logo-1.webp';

export const Logo = (props: FlexProps) => {
  return (
    <Flex
      borderRadius='full'
      alignItems='center'
      gap='1rem'
      {...props}>
      <Image
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
