import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { signInUser } from '../../../cognitoAuth';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await signInUser({
        Email: email,
        Password: password,
      });
      // Clear input fields on successful signup
      setEmail('');
      setPassword('');
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Error signing in!');
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
              Sign In
            </Text>
          </Center>
          <Center>
            <FormControl marginTop={30} width="30vw">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required // Make the field required
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required // Make the field required
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
              Sign In
            </Button>
          </Center>
          <Center>
            <Button
              marginTop={5}
              bg="#4285F4"
              colorScheme="#E0EFFE"
              width="30vw"
            >
              Continue with Google
            </Button>
          </Center>
          <Center>
            <Button
              marginTop={5}
              bg="#000000"
              colorScheme="#E0EFFE"
              width="30vw"
            >
              Continue with GitHub
            </Button>
          </Center>
          <Center>
            <Text marginTop={5}>I Don't  have an account?</Text>
            <Link marginTop={5} href="/signup" >Sign Up</Link>
          </Center>
        </Box>
      </Flex>
    </Container>
  );
};
