import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Card,
  Button,
  Spinner,
  InputGroup,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { FormInputControl, FormInput } from '@components/ui';
import { useResetPassword } from '@/hooks';
import {
  ResetPasswordSchema,
  ResetPasswordType,
} from '@pages/UserPage/UserPage.schema';

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordType>({
    mode: 'onSubmit',
    resolver: zodResolver(ResetPasswordSchema),
  });

  const { mutate, isPending } = useResetPassword();

  const onSubmit: SubmitHandler<ResetPasswordType> = async data => {
    mutate(data);
  };

  return (
    <Flex direction='column'>
      <Heading
        size='md'
        marginBottom='1rem'>
        Reset password
      </Heading>

      <Card
        as='form'
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <FormInputControl
          label='Old password'
          errors={errors.oldPassword?.message}>
          <FormInput
            placeholder='Old password'
            type='password'
            aria-describedby='helper-text-password'
            {...register('oldPassword')}
          />
        </FormInputControl>
        <FormInputControl
          label='New password'
          errors={errors.newPassword?.message}>
          <FormInput
            placeholder='New password'
            type='password'
            aria-describedby='helper-text-password'
            {...register('newPassword')}
          />
        </FormInputControl>
        <FormInputControl
          label='Confirm new password'
          errors={errors.newPasswordConfirm?.message}>
          <InputGroup>
            <FormInput
              placeholder='Confirm new password'
              type='password'
              aria-describedby='helper-text-password'
              {...register('newPasswordConfirm')}
            />
          </InputGroup>
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
