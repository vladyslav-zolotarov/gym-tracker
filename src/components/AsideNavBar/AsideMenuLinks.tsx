import { ChakraComponent, Flex, FlexProps } from '@chakra-ui/react';
import { AsideMenuItem } from '@/components/AsideNavBar';
import { LuHome, LuGrip, LuCalendarRange } from 'react-icons/lu';

type MenuLinksComponent = ChakraComponent<'div', {}>;
type MenuLinksProps = FlexProps & {};

export const AsideMenuLinks = ((props: MenuLinksProps) => {
  return (
    <Flex
      gap='.2rem'
      direction='column'
      as='nav'
      display='flex'
      {...props}>
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
  );
}) as MenuLinksComponent;
