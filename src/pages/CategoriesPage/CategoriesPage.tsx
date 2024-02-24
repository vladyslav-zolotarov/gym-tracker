import { CategoryList } from '@components/Categories/CategoryList';
import { useGetCategories } from './CategoriesPage.hooks';
import { Heading, Text } from '@chakra-ui/react';

export const CategoriesPage = () => {
  const { data } = useGetCategories();

  return (
    <>
      <Heading>Categories 💪</Heading>

      <CategoryList categories={data} />
    </>
  );
};
