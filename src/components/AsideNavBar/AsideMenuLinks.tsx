import { useRef } from 'react';
import {
  Button,
  Center,
  ChakraComponent,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FlexProps,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { AsideMenuItem } from '@/components/AsideNavBar';
import { LuHome, LuGrip, LuCalendarRange } from 'react-icons/lu';

type MenuLinksComponent = ChakraComponent<
  'div',
  { isOpen: boolean; onClose: () => void }
>;
type MenuLinksProps = FlexProps & { isOpen: boolean; onClose: () => void };

export const AsideMenuLinks = ((props: MenuLinksProps) => {
  const [isLaptop] = useMediaQuery('(min-width: 48em)');
  const btnRef = useRef(null);
  return (
    <>
      {/* {isLaptop ? ( */}
      <>
        <Flex
          gap='.2rem'
          direction='column'
          as='nav'
          display={{
            base: `${!props.isOpen ? 'none' : 'flex'} `,
            md: 'flex',
          }}>
          <AsideMenuItem to='/home'>
            <LuHome />
            Home
          </AsideMenuItem>
          <AsideMenuItem to='/calendar'>
            <LuCalendarRange />
            Calendar
          </AsideMenuItem>
          <AsideMenuItem to='/categories'>
            <LuGrip />
            Categories
          </AsideMenuItem>
        </Flex>
      </>
      {/* ) : (
        <Drawer
          isOpen={props.isOpen}
          placement='right'
          onClose={props.onClose}
          finalFocusRef={btnRef}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody
              as='nav'
              display='flex'
              flexDirection='column'
              onClick={props.onClose}>
              <Flex
                alignItems='center'
                gap='10px'
                marginBottom='15px'>
                <ToggleTheme />
                <MenuItem to='/signup'>
                  <Button
                    as='div'
                    variant='outline'>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem to='/signin'>
                  <Button
                    as='div'
                    variant='ghost'>
                    Sign in
                  </Button>
                </MenuItem>
              </Flex>

              <MenuItem to='/home'>Home</MenuItem>
              <MenuItem to='/calendar'>Calendar</MenuItem>
              <MenuItem to='/categories'>Categories</MenuItem>
            </DrawerBody>
            <DrawerFooter>footer</DrawerFooter>
          </DrawerContent>
        </Drawer>
      )} */}
    </>
  );
}) as MenuLinksComponent;
