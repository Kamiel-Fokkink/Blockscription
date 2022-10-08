import { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Button, Image, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { TempleWallet } from '@temple-wallet/dapp';

import colors from '../theme/foundations/colors';
import prescription from '../assets/prescription.svg';
import OutlineButton from '../components/OutlineButton';
import { useEffect } from 'react';

const HomePage = () => {
  const [tezos, setTezos] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [userRole, setUserRole] = useState('');

  const connect = async () => {
    const wallet = new TempleWallet('Bscription');
    await wallet.connect('kathmandunet');
    const tz = await wallet.toTezos();
    const add = wallet.pkh || (await wallet.getPKH());
    tz.setWalletProvider(wallet);
    tz.setProvider({ wallet });
    setTezos(tz);
    setUserAddress(add);
    console.log(add);

    console.log('before call SC');
    const contract = await tz.wallet.at('KT1DE4VUdNsc7cycYQJrzfAWqcL5mxu66ABr');
    console.log(contract);

    // tz.contract
    //   .at('KT1DE4VUdNsc7cycYQJrzfAWqcL5mxu66ABr')
    //   .then(contract => {
    //     console.log('contract: ' + contract);
    //     contract.methods.areYouThere(true).send();
    //   })
    //   .then(op => {
    //     console.log(`Hash: ${op.opHash}`);
    //     return op.confirmation();
    //   })
    //   .then(result => {
    //     console.log(result);
    //     if (result.completed) {
    //       console.log(`Transaction correctly processed!
    //       Block: ${result.block.header.level}
    //       Chain ID: ${result.block.chain_id}`);
    //     } else {
    //       console.log('An error has occurred');
    //     }
    //   })
    //   .catch(err => console.log(err));
    console.log('after call SC');
  };

  useEffect(() => {
    console.log('userRole: ' + userRole);
  }, [userRole]);

  return (
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
            Bscription
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
            Renew your medical prescriptions on Tezos Blockchain
          </Text>
        </VStack>
        <VStack w={{ base: '90%', md: '496px' }}>
          <Link as={RouteLink} to="/register" w="100%">
            <Button variant="inline" w="100%" onClick={() => connect()}>
              Connect
            </Button>
          </Link>
          <Link href="https://tezos.com" w="100%" isExternal>
            <OutlineButton w="100%" content="Powered By Tezos" />
          </Link>
        </VStack>
      </VStack>
      <Image
        src={prescription}
        w={{ base: '320px', md: '420px', lg: '520px' }}
        maxW="90%"
      />
    </Stack>
  );
};

export default HomePage;
