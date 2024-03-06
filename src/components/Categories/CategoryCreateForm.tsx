import { useCreateCategory } from '@pages/CategoriesPage/CategoriesPage.hooks';
import {
  CreateCategorySchema,
  CreateCategoryType,
} from '@pages/CategoriesPage/CategoriesPage.schema';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Icon,
  DrawerFooter,
  Button,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import {
  FormInput,
  FormInputControl,
  FormUploadInput,
} from '@components/ui/index';
import { FiFile } from 'react-icons/fi';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { pb } from '@/lib/pocketbase';
import { useEffect } from 'react';

export const CategoryCreateForm = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm<CreateCategoryType>({
    mode: 'onSubmit',
    resolver: zodResolver(CreateCategorySchema),
  });

  const { mutate, isPending } = useCreateCategory();

  useEffect(() => {
    return () => reset();
  }, []);

  const onSubmit: SubmitHandler<CreateCategoryType> = async data => {
    mutate(data);
  };

  return (
    <Drawer
      id='kurwa-kurwa'
      size='full'
      isOpen={isOpen}
      placement='bottom'
      onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth='1px'>Create category</DrawerHeader>

        <DrawerBody>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            id='category-create-form'>
            <Flex
              margin='auto'
              maxWidth={{ base: '100%', lg: '50%' }}
              justifyContent='center'
              alignItems='center'
              padding='2rem 0'
              direction='column'
              gap='1.5rem'>
              <FormInputControl
                label='Category icon'
                errors={errors.icon?.message}>
                <FormUploadInput
                  accept={'image/*'}
                  register={register('icon', {
                    onChange: e => {
                      setValue('icon', e.target.files[0], {
                        shouldValidate: true,
                        shouldDirty: true,
                      });
                    },
                  })}>
                  <Flex
                    alignItems='center'
                    gap='1rem'>
                    <Button
                      variant='outline'
                      leftIcon={<Icon as={FiFile} />}>
                      Upload
                    </Button>
                    {getValues('icon')?.name && (
                      <Text>{getValues('icon')?.name}</Text>
                    )}
                  </Flex>
                </FormUploadInput>
              </FormInputControl>

              <Flex display='none'>
                <FormInputControl
                  label='user'
                  errors=''>
                  <FormInput
                    placeholder='user'
                    {...register('user_id', {
                      value: pb.authStore.model?.id,
                    })}
                  />
                </FormInputControl>
              </Flex>

              <FormInputControl
                label='Category name'
                errors={errors.name?.message}>
                <FormInput
                  placeholder='Category name'
                  {...register('name')}
                />
              </FormInputControl>
              <FormInputControl
                label='Category description'
                errors={errors.description?.message}>
                <FormInput
                  placeholder='Category description'
                  {...register('description')}
                />
              </FormInputControl>
            </Flex>
          </form>
        </DrawerBody>

        <DrawerFooter borderTopWidth='1px'>
          <Button
            variant='outline'
            mr={3}
            onClick={onClose}>
            Cancel
          </Button>
          <Button
            type='submit'
            form='category-create-form'
            colorScheme='green'
            onClick={isValid ? onClose : () => null}
            isLoading={isPending}
            spinner={
              <Spinner
                mr='5px'
                size='xs'
              />
            }>
            Create
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
