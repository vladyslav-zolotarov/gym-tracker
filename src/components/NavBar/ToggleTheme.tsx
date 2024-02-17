import { Button, useColorMode } from '@chakra-ui/react';
import { LuSun, LuMoon } from 'react-icons/lu';

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        w='40px'
        borderRadius='50%'
        iconSpacing='0'
        leftIcon={colorMode === 'dark' ? <LuSun /> : <LuMoon />}
        variant='ghost'
        onClick={toggleColorMode}></Button>
    </>
  );
};
