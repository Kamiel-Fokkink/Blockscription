import { Button, Flex, Text } from '@chakra-ui/react';

import colors from '../theme/foundations/colors';

const OutlineButton = ({ content, ...rest }) => (
	<Button variant="inline" {...rest} p="4px" _hover={{ opacity: 0.8 }}>
		<Flex w="100%" bg="black.900" h="100%" borderRadius="base" justify="center" align="center">
			<Text bgGradient={`linear-gradient(90deg, ${colors.blue[700]} 0%, ${colors.red[700]} 100%)`} bgClip="text">
				{content}
			</Text>
		</Flex>
	</Button>
);

export default OutlineButton;
