import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Flex, Heading, Select } from '@chakra-ui/react';
import { CategoryList } from '@components/Categories/CategoryList';
import {
  useGetCategories,
  PbCategoryCollections,
} from '@pages/CategoriesPage/CategoriesPage.hooks';
import { GtCategoriesResponse } from '@/types/pocketbase-types';

export const CategoriesPage = () => {
  const { data: categories } = useGetCategories(
    PbCategoryCollections.CATEGORIES
  );
  const { data: ownUserCategories } = useGetCategories(
    PbCategoryCollections.OWN_USER_CATEGORIES
  );
  const [selectedCategories, setselectedCategories] =
    useState<GtCategoriesResponse[]>();

  useEffect(() => {
    if (categories) {
      setselectedCategories(categories);
    }
  }, [categories]);

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    if (selectedValue === PbCategoryCollections.CATEGORIES) {
      return setselectedCategories(categories);
    }
    if (selectedValue === PbCategoryCollections.OWN_USER_CATEGORIES) {
      return setselectedCategories(ownUserCategories);
    }
    if (ownUserCategories && categories) {
      return setselectedCategories(categories.concat(ownUserCategories));
    }
  };

  return (
    <Box>
      <Flex justifyContent='space-between'>
        <Heading textAlign='start'>Categories 💪</Heading>

        <Select
          onChange={onChangeSelect}
          size='md'
          maxWidth='15rem'
          padding='1rem 0'>
          <option value={PbCategoryCollections.CATEGORIES}>
            GT categories
          </option>
          <option value='ALL_CATEGORIES'>All categories</option>
          <option value={PbCategoryCollections.OWN_USER_CATEGORIES}>
            My categories
          </option>
        </Select>
      </Flex>

      <CategoryList categories={selectedCategories} />
    </Box>
  );
};
