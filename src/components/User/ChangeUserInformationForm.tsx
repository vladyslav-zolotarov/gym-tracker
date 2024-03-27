import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { FormInputControl, FormInput, FormUploadInput } from '@components/ui';
import { UserSchema, UserType } from '@pages/UserPage/UserPage.schema';
import { useUserUpdate } from '@pages/UserPage/UserPage.hooks';
import { PocketBaseAuth } from '@hooks/index';
import { FiFile } from 'react-icons/fi';

export const ChangeUserInformationForm = ({
  user,
}: {
  user: PocketBaseAuth;
}) => {
  const { mutate, isPending } = useUserUpdate();
  const { id, username, email } = user;

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    mode: 'onSubmit',
    resolver: zodResolver(UserSchema),
  });

  const onSubmit: SubmitHandler<UserType> = async data => {
    mutate(data);
  };

  return (
    <Flex direction='column'>
      <Heading
        size='md'
        marginBottom='1rem'>
        Change personal information
      </Heading>
      <Card
        as='form'
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <FormInputControl
          label='Your image'
          errors={errors.avatar?.message}>
          <FormUploadInput
            accept={'image/*'}
            register={register('avatar', {
              onChange: e => {
                setValue('avatar', e.target.files[0], {
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
              {getValues('avatar')?.name && (
                <Text>{getValues('avatar')?.name}</Text>
              )}
            </Flex>
          </FormUploadInput>
        </FormInputControl>

        <FormInputControl
          label='Your id'
          errors={errors.id?.message}>
          <FormInput
            isReadOnly={true}
            value={id}
            placeholder='Your id'
            {...register('id')}
          />
        </FormInputControl>
        <FormInputControl
          label='Name'
          errors={errors.username?.message}>
          <FormInput
            placeholder='Name'
            defaultValue={username}
            aria-describedby='helper-text-name'
            {...register('username')}
          />
        </FormInputControl>
        <FormInputControl
          label='E-mail'
          errors={errors.email?.message}>
          <FormInput
            placeholder='E-mail'
            type='email'
            defaultValue={email}
            aria-describedby='helper-text-email'
            {...register('email')}
          />
        </FormInputControl>
        <Button
          marginTop='10px'
          width='50%'
          margin='auto'
          type='submit'
          isLoading={isPending}
          colorScheme='green'
          spinner={
            <Spinner
              mr='5px'
              size='xs'
            />
          }>
          Save
        </Button>
      </Card>
    </Flex>
  );
};
