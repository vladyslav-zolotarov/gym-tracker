import { UseFormRegister } from 'react-hook-form';
import { TFormInputs } from '@/types/form-types';

export const emailRegister = (register: UseFormRegister<TFormInputs>) =>
  register('email', {
    required: 'This field is required. Please enter your email!',
    pattern: {
      value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      message: 'Invalid email.',
    },
  });
