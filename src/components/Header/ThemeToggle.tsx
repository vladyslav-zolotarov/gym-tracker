import { Button, useColorMode } from '@chakra-ui/react';
import { LuSun, LuMoon } from 'react-icons/lu';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        width='40px'
        iconSpacing='0'
        leftIcon={colorMode === 'dark' ? <LuSun /> : <LuMoon />}
        variant='outline'
        onClick={toggleColorMode}></Button>
    </>
  );
};
