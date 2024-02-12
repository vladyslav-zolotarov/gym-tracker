import { Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        w='40px'
        borderRadius='50%'
        iconSpacing='0'
        leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        colorScheme='teal'
        variant='ghost'
        onClick={toggleColorMode}></Button>
    </>
  );
};
