import { Center, ChakraProvider, Container} from "@chakra-ui/react";
import { apptheme } from "./theme";
import TaskTable from "./TaskTable";
import { signUp } from "./components/SignUp/signUp";


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
