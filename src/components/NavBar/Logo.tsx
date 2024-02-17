import { Flex, Image, Text } from '@chakra-ui/react';
import LogoIcon from '@assets/icons/logo-3.svg';
import { MenuItem } from '@components/NavBar';

export const Logo = () => {
  return (
    <Flex>
      <MenuItem
        display='flex'
        alignItems='center'
        gap='5px'>
        <Image
          boxSize='40px'
          src={LogoIcon}
          alt='Google'
        />
        <Text
          as='b'
          fontSize='20px'>
          GyMtracker
        </Text>
      </MenuItem>
    </Flex>
  );
};
