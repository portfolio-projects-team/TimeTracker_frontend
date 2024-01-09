import React, { useEffect } from 'react';
import {
  Box,
  Icon,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { BsFolder2 } from 'react-icons/bs';
import { getTasks } from '../../utils/cognitoAuth';

const Sidebar: React.FC = () => {
  useEffect(() => {
    getTasks()
      .then((tasks) => {
        console.log(tasks);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth="1px"
      w="60"
    >
      <VStack
        h="full"
        w="full"
        alignItems="flex-start"
        justifyContent="flex-start"
        p={4}
      >
        <Link href="#" display="flex" alignItems="center">
          <Icon as={AiOutlineHome} boxSize={6} />
          <Text ml={3}>Dashboard</Text>
        </Link>
        <Link href="#" display="flex" alignItems="center">
          <Icon as={BsFolder2} boxSize={6} />
          <Text ml={3}>Projects</Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
