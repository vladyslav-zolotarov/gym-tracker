import { Input, InputProps, forwardRef } from '@chakra-ui/react';

export const FormInput = forwardRef<InputProps, 'input'>((props, ref) => {
  return (
    <Input
      ref={ref}
      {...props}
    />
  );
});
