import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { apptheme } from './theme';
import NavBar from './components/Navbar/Index';
import Footer from './components/Footer/footer';
import { SignUp } from './components/SignUp/signUp'; // Replace with your other component import
import { SignIn } from './components/SignIn/signIn'; // Replace with your other component import
import Dashboard from './components/Dashboard/Dashboard';
import React from 'react';

const GuestLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar isGuest={true} />
      {children}
      <Footer />
    </>
  );
};

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar isGuest={false} />
      {children}
    </>
  );
};

function App() {
  return (
    <ChakraProvider theme={apptheme}>
      <Flex
        minHeight="100vh"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box flex="1">
          <Router>
            <Routes>
              <Route path="/" />
              <Route
                path="/signup"
                element={
                  <GuestLayout>
                    <SignUp />
                  </GuestLayout>
                }
              />
              <Route
                path="/signin"
                element={
                  <GuestLayout>
                    <SignIn />
                  </GuestLayout>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <AuthLayout>
                    <Dashboard />
                  </AuthLayout>
                }
              />
            </Routes>
          </Router>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
