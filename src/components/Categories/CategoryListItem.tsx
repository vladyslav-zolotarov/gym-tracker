import { getPbImgUrl } from '@/helpers';
import { GtCategoriesResponse } from '@/types/pocketbase-types';
import { IoIosArrowForward } from 'react-icons/io';
import { Avatar, Box, Flex, Text, useColorMode } from '@chakra-ui/react';
import { Link } from '@tanstack/react-router';

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
        <Avatar
          src={igmSrc}
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
      {/* <Flex
        alignItems='center'
        justifyContent='flex-end'
        width='100%'
        gap='1rem'>
        <Box>
          <Text
            textAlign='end'
            fontSize='sm'>
            {category.description}
          </Text>
        </Box>
      </Flex> */}
    </Flex>
  );
};
