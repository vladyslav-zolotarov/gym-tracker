import { TFormInputs } from '@/types/form-types';
import { UseFormRegister } from 'react-hook-form';

export const passwordRegister = (register: UseFormRegister<TFormInputs>) =>
  register('password', {
    required: 'This field is required. Please enter your password!',
    minLength: {
      value: 5,
      message: 'The password must be at least 5 characters long.',
    },
  });
