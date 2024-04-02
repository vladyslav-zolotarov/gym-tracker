import { useAuth } from '@/contexts/auth.context';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import {
  ChangeUserInformationForm,
  UserInformation,
  ResetPasswordForm,
} from '@components/User/index';

export const UserPage = () => {
  const { isAuthenticated, user } = useAuth();

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
