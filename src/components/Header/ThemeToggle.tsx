import { Button, ButtonProps, useColorMode } from '@chakra-ui/react';
import { LuSun, LuMoon } from 'react-icons/lu';

export const ThemeToggle = (props: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        marginLeft='auto'
        width='40px'
        iconSpacing='0'
        leftIcon={colorMode === 'dark' ? <LuSun /> : <LuMoon />}
        variant='outline'
        onClick={toggleColorMode}
        {...props}></Button>
    </>
  );
};
