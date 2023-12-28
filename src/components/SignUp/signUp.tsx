import { useState } from 'react';
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
import { signUpUser } from '../../../cognitoAuth';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 


  const handleSignUp = async () => {
    try {
      await signUpUser({
        Email: email,
        Password: password,
        FirstName: firstName,
        LastName: lastName,
      });
      // Clear input fields on successful signup
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxW="xl" centerContent>
      <Flex marginTop={40}>
        <Box flex="1" width="50vw" bg="#050A24">
          <Center>
            <Text>Box 3</Text>
          </Center>
        </Box>
        <Box flex="1" width="50vw" bg="#F0F0F0" padding={20}>
          <Center>
            <Text fontSize="4xl" fontWeight="bold">
              Create an account
            </Text>
          </Center>
          <Center>
            <FormControl marginTop={30} width="30vw">
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Center>
          <Center>
            <Button
              marginTop={5}
              bg="#6F2DA8"
              colorScheme="white"
              width="30vw"
              onClick={handleSignUp}
            >
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
          <Link marginTop={5}>Sign In</Link>
        </Center>
      </Box>
    </Flex>
  </Container>
  );  
};