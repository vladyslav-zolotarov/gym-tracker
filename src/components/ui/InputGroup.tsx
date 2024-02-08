import { forwardRef } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export const InputGroup = ({ props }) => {
  return (
    <FormControl isInvalid={!!errors.email?.message}>
      <FormLabel>E-mail</FormLabel>
      {children}
      <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
    </FormControl>
  );
};
