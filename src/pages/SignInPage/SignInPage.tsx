import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from '@tanstack/react-router';
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Spinner,
  Card,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useSignIn } from '@pages/SignInPage/SignInPage.hooks';
import {
  SignInFormSchema,
  SignInFormType,
} from '@pages/SignInPage/SignInPage.schema';
import { FormInputGroup, FormInput } from '@components/ui/index';
import { GoogleButton } from '@/components/GoogleButton/GoogleButton';

export const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(SignInFormSchema),
  });
  const { mutate: onSignIn, isPending } = useSignIn();

  const onSubmit: SubmitHandler<SignInFormType> = async data => {
    onSignIn(data);
  };

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      direction='column'
      minHeight='100vh'>
      <Heading
        size='lg'
        textAlign='center'>
        Sign In to GT
      </Heading>

      <Text
        textAlign='center'
        fontSize='xl'
        mb='20px'>
        Hello, welcome back
      </Text>

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
          <FormInputGroup
            label='E-mail'
            errors={errors.email?.message}>
            <FormInput
              placeholder='E-mail'
              type='email'
              aria-describedby='helper-text-email'
              {...register('email')}
            />
          </FormInputGroup>
          <FormInputGroup
            label='Password'
            errors={errors.password?.message}>
            <FormInput
              placeholder='Password'
              type='password'
              aria-describedby='helper-text-password'
              {...register('password')}
            />
          </FormInputGroup>
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
            Signin
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

      <Card
        variant='outline'
        direction='column'
        maxW='md'
        width={{ base: '100%', md: 'md' }}
        padding='20px'>
        <Text textAlign='center'>
          New to GT?{' '}
          <ChakraLink
            as={Link}
            to='/signup'>
            Create an account
          </ChakraLink>
        </Text>
      </Card>
    </Flex>
  );
};
