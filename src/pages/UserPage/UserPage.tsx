import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import {
  ChangeUserInformationForm,
  UserInformation,
  ResetPasswordForm,
} from '@components/User/index';
import { useAuthCheck } from '@hooks/index';

export const UserPage = () => {
  const { isAuthenticated, user } = useAuthCheck();

  if (!isAuthenticated) {
    return (
      <Heading
        size='lg'
        textAlign='center'>
        You are not authorized
      </Heading>
    );
  }

  return (
    <>
      <Flex
        direction='column'
        gap='2rem'>
        <UserInformation user={user} />

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap='2rem'>
          <ChangeUserInformationForm user={user} />
          <ResetPasswordForm />
        </SimpleGrid>
      </Flex>
    </>
  );
};
