import { useState } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import {
  PbCategoryCollections,
  PbCategoryCollectionsType,
} from '@pages/CategoriesPage/CategoriesPage.hooks';
import {
  CategoryTop,
  CategoryList,
  CategoryCreateForm,
} from '@/components/Categories';
import { TopContainer } from '@/components/ui';

export const CategoriesPage = () => {
  const [selectedCategoryCollection, setSelectedCategoryCollection] =
    useState<PbCategoryCollectionsType>(PbCategoryCollections.CATEGORIES);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <TopContainer
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'unset', md: 'center' }}
        justifyContent='space-between'>
        <CategoryTop
          onOpen={onOpen}
          setSelectedCategoryCollection={setSelectedCategoryCollection}
        />
      </TopContainer>

      <CategoryList categoryCollections={selectedCategoryCollection} />

      {isOpen && (
        <CategoryCreateForm
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </Box>
  );
};
