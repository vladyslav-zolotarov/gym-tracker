import { Avatar, Flex, Text } from '@chakra-ui/react';
import { AsideMenuItem } from '@components/AsideNavBar/index';
import { PocketBaseAuth } from '@hooks/index';
import { getPbImgUrl } from '@helpers/index';

export const AsideUser = ({ user }: { user: PocketBaseAuth | undefined }) => {
  if (!user) {
    return;
  }

  const avatarSrc = getPbImgUrl({
    id: user.id,
    collectionId: user.collectionId,
    avatar: user.avatar,
    thumb: '50x50',
  });

  return (
    <AsideMenuItem
      to='/user'
      width='100%'>
      <Avatar
        height='40px'
        width='40px'
        src={avatarSrc}
      />
      <Flex direction='column'>
        <Text
          fontSize='1rem'
          fontWeight='500'>
          {user.username}
        </Text>
      </Flex>
    </AsideMenuItem>
  );
};
