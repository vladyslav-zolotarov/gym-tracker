import {
  ComponentWithAs,
  Input,
  InputProps,
  forwardRef,
} from '@chakra-ui/react';

interface FormInputProps extends ComponentWithAs<'input', InputProps> {}

export const FormInput = forwardRef<InputProps, FormInputProps>(
  (props, ref) => {
    return (
      <Input
        ref={ref}
        {...props}
      />
    );
  }
);
