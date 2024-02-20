import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { ResetPasswordForm } from '@components/User/ResetPasswordForm';
import { ChangeUserInformationForm } from '@/components/User/ChangeUserInformationForm';
import { useAuthCheck } from '@hooks/index';
import { UserInformation } from '@/components/User/UserInformation';

export const UserPage = () => {
  const auth = useAuthCheck();

  if (!auth) {
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
        <UserInformation {...auth} />

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap='2rem'>
          <ChangeUserInformationForm {...auth} />
          <ResetPasswordForm />
        </SimpleGrid>
      </Flex>
    </>
  );
};
