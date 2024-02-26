import {
  Avatar,
  Badge,
  Box,
  Card,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { PocketBaseAuth } from '@/hooks';
import { formatDate, getPbImgUrl } from '@helpers/index';

export const UserInformation = ({
  id,
  email,
  created,
  updated,
  verified,
  username,
  avatar,
  collectionId,
}: PocketBaseAuth) => {
  return (
    <Flex direction='column'>
      <Heading textAlign='start'>Personal information</Heading>

      <Card>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent='space-between'>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            marginBottom={{ base: '1rem', md: '0' }}
            gap='2rem'>
            <Avatar
              h='140px'
              w='140px'
              size='xl'
              name={username}
              src={getPbImgUrl({ id, collectionId, avatar, thumb: '140x140' })}
            />
            <Flex
              direction='column'
              gap='10px'>
              <Text fontSize='md'>
                System id:{' '}
                <Text
                  fontSize='md'
                  as='b'>
                  {id}
                </Text>
              </Text>

              <Box>
                <Text fontSize='md'>Username:</Text>
                <Text
                  fontSize='md'
                  as='b'>
                  {username}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize='md'
                  display='flex'
                  alignItems='center'
                  gap='.5rem'>
                  E-mail:{' '}
                  <Badge
                    fontSize='sm'
                    colorScheme={verified ? 'green' : 'default'}>
                    {verified ? 'Verified' : 'Unverified'}
                  </Badge>
                </Text>
                <Text
                  fontSize='md'
                  as='b'>
                  {email}
                </Text>
              </Box>
            </Flex>
          </Flex>

          <Flex
            direction='column'
            gap='10px'>
            <Box textAlign={{ base: 'start', md: 'end' }}>
              <Text fontSize='md'>Acount created:</Text>
              <Text
                fontSize='md'
                as='b'>
                {formatDate(created)}
              </Text>
            </Box>
            <Box textAlign={{ base: 'start', md: 'end' }}>
              <Text fontSize='md'>Last update acount information:</Text>
              <Text
                fontSize='md'
                as='b'>
                {formatDate(updated)}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
