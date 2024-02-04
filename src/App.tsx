import { ChakraProvider, Flex, Box, Spinner, Center } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { apptheme } from "./theme";
import NavBar from "./components/Navbar/Index";
import Footer from "./components/Footer/footer";
import { SignUp } from "./components/SignUp/signUp"; // Replace with your other component import
import { SignIn } from "./components/SignIn/signIn"; // Replace with your other component import
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./components/Landing/Index";
import React, { useEffect } from "react";
import { CognitoIdToken, CognitoUserPool } from "amazon-cognito-identity-js";
import { CLIENT_ID, USER_POOL_ID } from "./utils/cognitoAuth";

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
  const [auth, setAuth] = React.useState<boolean | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    const userPool = new CognitoUserPool({
      UserPoolId: USER_POOL_ID,
      ClientId: CLIENT_ID,
    });
    const user = userPool.getCurrentUser();

    if (!user) {
      setAuth(true);
    } else {
      navigate("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <NavBar isGuest={false} />
      {auth === undefined && (
        <Center h="100vh">
          <Spinner />
        </Center>
      )}
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
