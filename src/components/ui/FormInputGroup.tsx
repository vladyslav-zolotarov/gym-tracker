import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type FormInputGroupProps = {
  label: string;
  errors: string | undefined;
};

export const FormInputGroup = (
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
