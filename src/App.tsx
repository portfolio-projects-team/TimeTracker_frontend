import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { apptheme } from './theme';
import NavBar from './components/Navbar/Index';
import Footer from './components/Footer/footer';
import { SignUp } from './components/SignUp/signUp'; // Replace with your other component import
import { SignIn } from './components/SignIn/signIn'; // Replace with your other component import
import Dashboard from './components/Dashboard/Dashboard';
import Landing from './components/Landing/Index';
import React from 'react';
import { CognitoIdToken } from 'amazon-cognito-identity-js';

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
  const [auth, setAuth] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const idToken = localStorage.getItem('idToken');
    if (idToken) {
      const token = new CognitoIdToken({ IdToken: idToken });
      if (token) {
        setAuth(true);
      } else {
        navigate('/signin');
      }
    } else {
      navigate('/signin');
    }
  }
  , []);
  return (
    <>
      <NavBar isGuest={false} />
      {auth && children}
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
              <Route
                path="/"
                element={
                  <GuestLayout>
                    <Landing />
                  </GuestLayout>
                }
              />
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
