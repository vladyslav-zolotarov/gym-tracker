import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Flex,
  Heading,
  Card,
  Stack,
  Button,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { FormInputControl, FormInput } from '@/components/ui';
import {
  SignUpFormSchema,
  SignUpFormType,
} from '@pages/SignUpPage/SignUpPage.schema';
import { useSignUp } from '@pages/SignUpPage/SignUpPage.hooks';
import { GoogleButton } from '@components/GoogleButton/GoogleButton';

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(SignUpFormSchema),
  });

  const { mutate, isPending } = useSignUp();

  const onSubmit: SubmitHandler<SignUpFormType> = async data => {
    mutate(data);
  };

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      direction='column'
      minHeight='100vh'>
      <Heading marginBottom='0'>Create account</Heading>

      <Card
        variant='outline'
        direction='column'
        maxW='md'
        width={{ base: '100%', md: 'md' }}
        padding='20px'
        mb='30px'
        as='form'
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='4'>
          <FormInputControl
            label='Name'
            errors={errors.username?.message}>
            <FormInput
              placeholder='Name'
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
              aria-describedby='helper-text-email'
              {...register('email')}
            />
          </FormInputControl>
          <FormInputControl
            label='Password'
            errors={errors.password?.message}>
            <FormInput
              placeholder='Password'
              type='password'
              aria-describedby='helper-text-password'
              {...register('password')}
            />
          </FormInputControl>
          <FormInputControl
            label='Confirm password'
            errors={errors.passwordConfirm?.message}>
            <FormInput
              placeholder='Confirm password'
              type='password'
              aria-describedby='helper-text-password'
              {...register('passwordConfirm')}
            />
          </FormInputControl>

          <Button
            type='submit'
            isLoading={isPending}
            colorScheme='green'
            spinner={
              <Spinner
                mr='5px'
                size='xs'
              />
            }>
            Create account
          </Button>

          <Flex
            alignItems='center'
            gap='2'
            margin='auto'>
            <Text>or</Text>
            <GoogleButton />
          </Flex>
        </Stack>
      </Card>
    </Flex>
  );
};
