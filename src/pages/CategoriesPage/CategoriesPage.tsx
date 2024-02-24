import { Box, Heading } from '@chakra-ui/react';
import { CategoryList } from '@components/Categories/CategoryList';
import { useGetCategories } from '@pages/CategoriesPage/CategoriesPage.hooks';

export const CategoriesPage = () => {
  const { data } = useGetCategories();

  return (
    <Box>
      <Heading textAlign='start'>Categories 💪</Heading>

      <CategoryList categories={data} />
    </Box>
  );
};
