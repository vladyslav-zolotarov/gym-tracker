import { Link } from '@tanstack/react-router';
import {
  Image,
  Box,
  Flex,
  Text,
  useColorMode,
  Divider,
} from '@chakra-ui/react';
import { getPbImgUrl } from '@helpers/index';
import { GtCategoriesResponse } from '@/types/pocketbase-types';
import { IoIosArrowForward } from 'react-icons/io';
import defaultImg from '@assets/icons/defaultImg.webp';

export const CategoryListItem = ({
  category,
}: {
  category: GtCategoriesResponse;
}) => {
  const { colorMode } = useColorMode();

  const igmSrc = getPbImgUrl({
    id: category.id,
    collectionId: category.collectionId,
    avatar: category.icon,
    thumb: '50x50',
  });

  return (
    <>
      <Divider />
      <Flex
        as={Link}
        padding='.5rem'
        gap='1rem'
        alignItems='center'
        _hover={{
          backgroundColor: colorMode == 'light' ? 'gray.100' : 'gray.700',
        }}>
        <Flex
          minWidth='200px'
          gap='1rem'
          alignItems='center'>
          <Image
            borderRadius='full'
            src={igmSrc ? igmSrc : defaultImg}
            alt={category.name}
            height='50px'
          />
          <Text
            size='lg'
            fontWeight='500'>
            {category.name}
          </Text>
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
