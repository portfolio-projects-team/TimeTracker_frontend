import {
  Box,
  Grid,
  GridItem,
  Image,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted!', formData);
    // You can add your form submission logic (API calls, etc.) here
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={2} marginTop={12} align="stretch">
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => handleInputChange(e, 'firstName')}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => handleInputChange(e, 'lastName')}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, 'email')}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, 'password')}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Sign Up
        </Button>
      </VStack>
    </form>
  );
};

const TwoColumnLayout = () => {
  return (
    <Grid templateColumns="1fr 1fr" gap={8} justifyContent="center">
      <GridItem>
        <Box bg="blue" p={8} marginTop={12} textAlign="center">
          {/* Replace 'logo.png' with your company logo */}
          <Image src="/logo.png" alt="Company Logo" />
          <Box mt={4}>
            <p>Additional Text Here</p>
          </Box>
        </Box>
      </GridItem>
      <GridItem>
        <SignupForm />
      </GridItem>
    </Grid>
  );
};

export default TwoColumnLayout;
