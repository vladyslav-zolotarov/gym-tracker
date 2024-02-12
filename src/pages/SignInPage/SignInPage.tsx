import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Spinner,
  Card,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignIn, useSignInGoogle } from '@pages/SignInPage/SignInPage.hooks';
import { FormInputGroup, FormInput } from '@components/ui/index';
import { emailRegister, passwordRegister } from '@helpers/formRedisters/index';
import { useUserContext } from '@services/state/userContext';
import { TFormInputs } from '@/types/form-types';
import GoogleIcon from '@assets/icons/google.svg';
import { Link } from '@tanstack/react-router';

export const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormInputs>({ mode: 'onSubmit' });
  const { mutate: onSignInGoogle } = useSignInGoogle();
  const { mutate: onSignIn, isPending } = useSignIn();
  const { state } = useUserContext();

  const onSubmit: SubmitHandler<TFormInputs> = async data => {
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
              {...emailRegister(register)}
            />
          </FormInputGroup>
          <FormInputGroup
            label='Password'
            errors={errors.password?.message}>
            <FormInput
              placeholder='Password'
              type='password'
              aria-describedby='helper-text-password'
              {...passwordRegister(register)}
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
        width={{ base: '100%', md: 'md' }}
        padding='20px'>
        <Text textAlign='center'>
          New to GT? <Link to='/signup'>Create an account</Link>
        </Text>
      </Card>
    </Flex>
  );
};
