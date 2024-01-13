import React from 'react';
import { Flex, HTMLChakraProps } from '@chakra-ui/react';

interface NavBarContainerProps extends HTMLChakraProps<'nav'> {}

export const NavBarContainer: React.FC<NavBarContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      zIndex={20}
      pos="fixed"
      top="0"
      left="0"
      overflow="auto"
      {...props}
    >
      {children}
    </Flex>
  );
};
