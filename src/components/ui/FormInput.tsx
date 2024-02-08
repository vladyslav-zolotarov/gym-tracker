import { InputHTMLAttributes, forwardRef } from 'react';
import { Input } from '@chakra-ui/react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    const { placeholder, type } = props;

    return (
      <Input
        ref={ref}
        placeholder={placeholder}
        type={type}
        // {...register('email', {
        //   required: 'This field is required. Please enter your email!',
        //   pattern: {
        //     value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
        //     message: 'Invalid email.',
        //   },
        // })}
      />
    );
  }
);
