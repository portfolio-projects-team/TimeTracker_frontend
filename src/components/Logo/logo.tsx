import { FC } from 'react';
import { Box, Text, BoxProps } from '@chakra-ui/react';

interface LogoProps extends BoxProps {}

const Logo: FC<LogoProps> = (props: LogoProps) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};

export default Logo;
