import { ChangeEvent, useState } from 'react';
import { Box, Flex, Heading, Select } from '@chakra-ui/react';
import { CategoryList } from '@components/Categories/CategoryList';
import {
  PbCategoryCollections,
  PbCategoryCollectionsType,
} from '@pages/CategoriesPage/CategoriesPage.hooks';

export const CategoriesPage = () => {
  const [selectedCategoryCollection, setSelectedCategoryCollection] =
    useState<PbCategoryCollectionsType>(PbCategoryCollections.CATEGORIES);

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as PbCategoryCollectionsType;
    setSelectedCategoryCollection(value);
  };

  return (
    <Box>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        marginBottom={{ base: '1rem', md: '0' }}
        justifyContent='space-between'>
        <Heading textAlign='start'>Categories 💪</Heading>

        <Select
          onChange={onChangeSelect}
          size='md'
          maxWidth={{ base: '100%', md: '15rem' }}
          padding={{ base: '0', md: '1rem 0' }}>
          <option value={PbCategoryCollections.CATEGORIES}>
            GT categories
          </option>
          <option value={PbCategoryCollections.OWN_USER_CATEGORIES}>
            My categories
          </option>
        </Select>
      </Flex>

      <CategoryList categoryCollections={selectedCategoryCollection} />
    </Box>
  );
};
