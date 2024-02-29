import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { GtCategoriesResponse } from '@/types/pocketbase-types';
import { CategoryListItem } from '@/components/Categories';

export const CategoryList = ({
  categories,
}: {
  categories: GtCategoriesResponse[] | undefined;
}) => {
  if (!categories || !categories.length) {
    return <Text>Category list is empty!</Text>;
  }

  return (
    <Flex flexDirection='column'>
      {categories.map(category => (
        <Box key={category.id}>
          <Divider />
          <CategoryListItem category={category} />
        </Box>
      ))}
    </Flex>
  );
};
