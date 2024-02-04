import { FC } from 'react';
import { Box, Text, BoxProps } from '@chakra-ui/react';

interface LogoProps extends BoxProps {}

const Logo: FC<LogoProps> = (props: LogoProps) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Text as="span" color="black">
          TIK
        </Text>{' '}
        <Text as="span" color="#7E30E1">
          TOPIA
        </Text>
      </Text>
    </Box>
  );
};

export default Logo;
