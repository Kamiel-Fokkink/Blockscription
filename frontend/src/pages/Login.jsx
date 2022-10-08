import { Link as RouteLink } from 'react-router-dom';
import { Button, Image, Link, Stack, Text, VStack } from '@chakra-ui/react';

import colors from '../theme/foundations/colors';
import login from '../assets/login.svg';
import WhiteInput from '../components/WhiteInput';

const LoginPage = () => (
  <Stack
    direction={{ base: 'column-reverse', lg: 'row' }}
    wrap="wrap-reverse"
    align="center"
    justify="center"
    w="100%"
    minH="100vh"
    spacing={{ base: '32px', md: '48px', lg: '64px' }}
  >
    <VStack spacing="56px">
      <VStack spacing="16px">
        <Text
          fontSize={{ base: '32px', md: '56px', lg: '72px' }}
          fontWeight="extrabold"
          bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
          bgClip="text"
          textAlign="center"
        >
          Login
        </Text>
        <Text
          fontSize={{
            base: '6px',
            '3xs': '10px',
            '2xs': '12px',
            xs: '14px',
            '2sm': '16px',
          }}
          textAlign="center"
          w="520px"
          maxW="90vw"
        >
          Login to your account
        </Text>
      </VStack>
      <VStack w={{ base: '90%', md: '496px' }}>
        <WhiteInput />
        <Link as={RouteLink} to="/login" w="100%">
          <Button variant="inline" w="100%">
            Login
          </Button>
        </Link>
      </VStack>
    </VStack>
    <Image
      src={login}
      w={{ base: '320px', md: '420px', lg: '520px' }}
      maxW="90%"
    />
  </Stack>
);

export default LoginPage;
