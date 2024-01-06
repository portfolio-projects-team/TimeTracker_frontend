import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { apptheme } from './theme';
import NavBar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import { SignUp } from './components/SignUp/signUp'; // Replace with your other component import
import { SignIn } from './components/SignIn/signIn'; // Replace with your other component import
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <ChakraProvider theme={apptheme}>
      <Flex
        minHeight="100vh"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <NavBar />
        </Box>
        <Box flex="1">
          <Router>
            <Routes>
              <Route path="/" />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
