import { Center, Image, Stack } from '@chakra-ui/react';
import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

import qrcode from '../assets/qrcode.png';
import colors from '../theme/foundations/colors';

const GenerateModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent bg="black.500">
      <ModalHeader color="white"></ModalHeader>
      <ModalCloseButton color="white" />
      <Stack align="center" spacing="32px">
        <Text
          fontSize="32px"
          fontWeight="extrabold"
          bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`}
          bgClip="text"
          textAlign="center"
        >
          Scan it
        </Text>
        <Center w="90%" bg="white" borderRadius="lg" p="16px">
          <Image src={qrcode} w="100%" />
        </Center>
      </Stack>
      <ModalFooter mt="16px">
        <Button variant="inline" w="100%" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default GenerateModal;
