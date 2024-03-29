import { ReactNode, useRef } from 'react';
import { InputGroup, InputProps } from '@chakra-ui/react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FileUploadProps = InputProps & {
  register: UseFormRegisterReturn;
  accept?: string;
  children?: ReactNode;
};

export const FormUploadInput = (props: FileUploadProps) => {
  const { register, accept, children } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { ref, ...rest } = register as {
    ref: (instance: HTMLInputElement | null) => void;
  };

  const handleClick = () => inputRef.current?.click();

  return (
    <InputGroup onClick={handleClick}>
      <input
        type={'file'}
        hidden
        accept={accept}
        {...rest}
        ref={e => {
          ref(e);
          inputRef.current = e;
        }}
      />
      <>{children}</>
    </InputGroup>
  );
};
