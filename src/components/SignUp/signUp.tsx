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
      <Box flex="1" width="50vw" bg="#F0F0F0" padding={20}>
        <Center>
          <Text fontSize="4xl" fontWeight="bold">
            Create an account
          </Text>
        </Center>
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
          <Link marginTop={5}>Sign In</Link>
        </Center>
      </Box>
    </Flex>
  </Container>
);

// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Text,
//   Center,
//   Button,
//   Link,
// } from '@chakra-ui/react';
// import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

// const poolData = {
//   UserPoolId: 'eu-west-2_cLq8JoGcL',
//   ClientId: 'dcul67egcvg5l4g7epd7lbos5',
// };

// const userPool = new CognitoUserPool(poolData);

// const SignUp = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     const attributeList = [
//       new CognitoUserAttribute({ Name: 'email', Value: email }),
//       new CognitoUserAttribute({ Name: 'given_name', Value: firstName }),
//       new CognitoUserAttribute({ Name: 'family_name', Value: lastName }),
//     ];

//     userPool.signUp(email, password, attributeList, [], (err, result) => {
//       if (err) {
//         console.error('Signup error:', err);
//         // Handle signup error
//       } else {
//         const cognitoUser = result?.user;
//         console.log('User signed up:', cognitoUser);
//         // Handle successful signup
//       }
//     });
//   };

//   return (
//     <Container maxW="xl" centerContent>
//       <Flex marginTop={40}>
//         <Box flex="1" width="50vw" bg="#050A24">
//           <Center>
//             <Text>Box 3</Text>
//           </Center>
//         </Box>
//         <Box flex="1" width="50vh" bg="#F0F0F0" padding={20}>
//           <Text fontSize="4xl" fontWeight="bold">
//             Create an account
//           </Text>
//           <Center>
//             <FormControl onSubmit={handleSubmit} marginTop={30} width="30vw">
//               <FormLabel>First Name</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="First Name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//               <FormLabel>Last Name</FormLabel>
//               <Input
//                 type="text"
//                 placeholder="Last Name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//               <FormLabel>Email</FormLabel>
//               <Input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <FormLabel>Password</FormLabel>
//               <Input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Button
//                 type="submit"
//                 marginTop={5}
//                 bg="#6F2DA8"
//                 colorScheme="white"
//                 width="30vw"
//               >
//                 Create Account
//               </Button>
//             </FormControl>
//           </Center>
//           <Center>
//             <Button
//               marginTop={5}
//               bg="#4285F4"
//               colorScheme="#E0EFFE"
//               width="30vw"
//             >
//               Continue with Google
//             </Button>
//           </Center>
//           <Center>
//             <Button
//               marginTop={5}
//               bg="#000000"
//               colorScheme="#E0EFFE"
//               width="30vw"
//             >
//               Continue with GitHub
//             </Button>
//           </Center>
//           <Center>
//             <Text marginTop={5}>Already have an account?</Text>
//             <Link marginTop={5}>Sign In</Link>
//           </Center>
//         </Box>
//       </Flex>
//     </Container>
//   );
// };

// export default SignUp;
