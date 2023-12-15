import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Center,
  Button,
  Link,
} from '@chakra-ui/react';


export const signUp = () => (
  <Container maxW="xl" centerContent>
    <Flex marginTop={40}>
      <Box flex="1" width="50vw" bg="#050A24">
        <Center>
          <Text>Box 3</Text>
        </Center>
      </Box>
      <Box flex="1" width="50vh" bg="#F0F0F0" padding={20}>
        <Text fontSize="4xl" fontWeight="bold">
          Create an account
        </Text>
        <Center>
          <FormControl marginTop={30} width="30vw">
            <FormLabel>First Name</FormLabel>
            <Input type="text" placeholder="First Name" />
            <FormLabel>Last Name</FormLabel>
            <Input type="text" placeholder="Last Name" />
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Email" />
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" />
          </FormControl>
        </Center>
        <Center>
          <Button marginTop={5} bg="#6F2DA8" colorScheme="white" width="30vw">
            Create Account
          </Button>
        </Center>
        <Center>
          <Button marginTop={5} bg="#4285F4" colorScheme="#E0EFFE" width="30vw">
            Continue with Google
          </Button>
        </Center>
        <Center>
          <Button marginTop={5} bg="#000000" colorScheme="#E0EFFE" width="30vw">
            Continue with GitHub
          </Button>
        </Center>
        <Center>
          <Text marginTop={5}>Already have an account?</Text>
          <Link marginTop={5}>
            Sign In
          </Link>
        </Center>
      </Box>
    </Flex>
  </Container>
);
