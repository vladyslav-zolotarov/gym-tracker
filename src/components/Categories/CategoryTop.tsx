import { ChangeEvent } from 'react';
import { Button, Flex, Heading, Select } from '@chakra-ui/react';
import {
  PbCategoryCollections,
  PbCategoryCollectionsType,
} from '@pages/CategoriesPage/CategoriesPage.hooks';
import { MdOutlineCreateNewFolder } from 'react-icons/md';

export const CategoryTop = ({
  setSelectedCategoryCollection,
  onOpen,
}: {
  setSelectedCategoryCollection: React.Dispatch<
    React.SetStateAction<PbCategoryCollectionsType>
  >;
  onOpen: () => void;
}) => {
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as PbCategoryCollectionsType;
    setSelectedCategoryCollection(value);
  };

  return (
    <>
      <Heading
        margin='0'
        padding='0'
        textAlign='start'>
        Categories 💪
      </Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap='1rem'>
        <Button
          onClick={onOpen}
          leftIcon={<MdOutlineCreateNewFolder />}
          variant='outline'
          colorScheme='whatsapp'>
          Create category
        </Button>
        <Select
          onChange={onChangeSelect}
          size='md'
          width={{ base: '100%', md: '15rem' }}>
          <option value={PbCategoryCollections.CATEGORIES}>
            GT categories
          </option>
          <option value={PbCategoryCollections.OWN_USER_CATEGORIES}>
            My categories
          </option>
        </Select>
      </Flex>
    </>
  );
};
