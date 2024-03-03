import { Flex } from '@chakra-ui/react';
import {
  CategoryListItem,
  CategoryListItemSkeleton,
} from '@components/Categories/index';
import {
  useGetCategories,
  PbCategoryCollectionsType,
} from '@pages/CategoriesPage/CategoriesPage.hooks';

export const CategoryList = ({
  categoryCollections,
}: {
  categoryCollections: PbCategoryCollectionsType;
}) => {
  const { data: categories, isLoading } = useGetCategories(categoryCollections);

  if (!categories || isLoading) {
    return [...Array(6)].map((_, id) => <CategoryListItemSkeleton key={id} />);
  }

  return (
    <Flex flexDirection='column'>
      {categories.map(category => (
        <CategoryListItem
          key={category.id}
          category={category}
        />
      ))}
    </Flex>
  );
};
