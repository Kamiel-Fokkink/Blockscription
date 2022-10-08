import {
  Badge,
  Button,
  Box,
  Grid,
  HStack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';

import colors from '../theme/foundations/colors';
import OutlineButton from '../components/OutlineButton';
import GenerateModal from '../components/GenerateModal';

const PrescriptionCard = ({ used, doctor, creation, expiration }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <VStack
        w="100%"
        h="100%"
        px="32px"
        py="16px"
        border="2px"
        borderColor="white"
        borderRadius="base"
        spacing="32px"
      >
        <HStack w="100%" justify="space-between">
          {!used ? (
            <Badge colorScheme="green">AVAILABLE</Badge>
          ) : (
            <Badge colorScheme="red">USED</Badge>
          )}

          <Text fontWeight="bold">{doctor}</Text>
        </HStack>
        <HStack w="100%" justify="space-between">
          <Text>{creation}</Text>
          <Text>{expiration}</Text>
        </HStack>
        <HStack w="100%">
          <Button variant="inline" w="100%" onClick={() => onOpen()}>
            Collect
          </Button>
          <OutlineButton w="100%" content="Renew" />
        </HStack>
      </VStack>

      <GenerateModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const PatientPage = () => (
  <VStack w="100%" spacing="64px">
    <VStack w="100%">
      <HStack px="32px" w="100%" justify="space-between" align="center">
        <Text
          fontSize="56px"
          fontWeight="extrabold"
          bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
          bgClip="text"
          textAlign="center"
        >
          Bscription
        </Text>
        <HStack spacing="16px">
          <Text>Jérome TAQUITO</Text>
          <VStack spacing="4px">
            <Box
              w="6px"
              h="6px"
              borderRadius="50%"
              bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
            />
            <Box
              w="6px"
              h="6px"
              borderRadius="50%"
              bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
            />
            <Box
              w="6px"
              h="6px"
              borderRadius="50%"
              bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
            />
          </VStack>
        </HStack>
      </HStack>
      <Box
        w="100%"
        h="4px"
        borderRadius="50%"
        bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
      />
    </VStack>
    <Grid templateColumns="repeat(3, 1fr)" gap="16px" px="160px" w="100%">
      <PrescriptionCard
        used={false}
        doctor={'Dr. Caux'}
        creation={'03/11/2022'}
        expiration={'03/11/2023'}
      />
      <PrescriptionCard
        used={true}
        doctor={'Dr. Blazit Michel'}
        creation={'24/10/2022'}
        expiration={'24/10/2023'}
      />
      <PrescriptionCard
        used={false}
        doctor={'Dr. Vallenet'}
        creation={'09/10/2022'}
        expiration={'09/10/2023'}
      />
      <PrescriptionCard
        used={true}
        doctor={'Dr. Krishnat Kumar'}
        creation={'12/09/2022'}
        expiration={'12/09/2023'}
      />
      <PrescriptionCard
        used={true}
        doctor={'Dr. Pontel'}
        creation={'18/08/2022'}
        expiration={'18/08/2023'}
      />
    </Grid>
  </VStack>
);

export default PatientPage;
