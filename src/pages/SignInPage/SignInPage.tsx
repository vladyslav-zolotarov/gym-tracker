import {
  Button,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Spinner,
  Card,
} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignIn, useSignInGoogle } from '@pages/SignInPage/SignInPage.hooks';
import GoogleIcon from '@assets/icons/google.svg';
import { TSignInForm } from '@/types/form-types';
import { useEffect } from 'react';
import { useUserContext } from '@services/state/userContext';

export const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInForm>({ mode: 'onSubmit' });
  const { mutate: onSignInGoogle } = useSignInGoogle();
  const { mutate: onSignIn, isPending } = useSignIn();
  const { state } = useUserContext();

  const onSubmit: SubmitHandler<TSignInForm> = async data => {
    onSignIn(data);
  };

  useEffect(() => {
    console.log('userContext', state);
  }, [state]);

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
        width='md'
        padding='20px'
        mb='30px'
        as='form'
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='4'>
          <FormControl isInvalid={!!errors.email?.message}>
            <FormLabel>E-mail</FormLabel>
            <Input
              placeholder='E-mail'
              type='email'
              aria-describedby='helper-text-email'
              {...register('email', {
                required: 'This field is required. Please enter your email!',
                pattern: {
                  value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
                  message: 'Invalid email.',
                },
              })}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={!!errors.password?.message}
            mb='20px'>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder='Password'
              type='password'
              aria-describedby='helper-text-password'
              {...register('password', {
                required: 'This field is required. Please enter your password!',
                minLength: {
                  value: 5,
                  message: 'The password must be at least 5 characters long.',
                },
              })}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
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
            <Button
              variant='outline'
              leftIcon={
                <Image
                  boxSize='20px'
                  src={GoogleIcon}
                  alt='Google'
                />
              }
              onClick={() => onSignInGoogle()}>
              Continue with Google
            </Button>
          </Flex>
        </Stack>
      </Card>

      <Card
        variant='outline'
        direction='column'
        maxW='md'
        width='md'
        padding='20px'>
        <Text textAlign='center'>New to GT? Create an account</Text>
      </Card>
    </Flex>
  );
};
