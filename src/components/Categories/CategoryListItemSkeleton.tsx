import {
  Flex,
  Image,
  Box,
  useColorMode,
  Skeleton,
  Divider,
} from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import defaultImg from '@assets/icons/defaultImg.webp';

export const CategoryListItemSkeleton = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Divider />
      <Flex
        padding='.5rem'
        gap='1rem'
        alignItems='center'>
        <Flex
          minWidth='200px'
          gap='1rem'
          alignItems='center'>
          <Image
            borderRadius='full'
            src={defaultImg}
            height='50px'
          />
          <Skeleton
            height='20px'
            width='300px'
            backgroundColor={colorMode == 'light' ? 'gray.100' : 'gray.700'}
          />
        </Flex>
        <Box
          marginLeft='auto'
          width='20px'>
          <IoIosArrowForward />
        </Box>
      </Flex>
    </>
  );
};
