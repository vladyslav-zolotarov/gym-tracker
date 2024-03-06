import { PropsWithChildren } from 'react';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';

type FormInputGroupProps = {
  label: string;
  errors: string | undefined;
};

export const FormInputControl = (
  props: PropsWithChildren<FormInputGroupProps>
) => {
  const { errors, label, children } = props;

  return (
    <FormControl isInvalid={!!errors}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormErrorMessage>{errors}</FormErrorMessage>
    </FormControl>
  );
};
