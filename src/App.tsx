import { Center, ChakraProvider, Container} from "@chakra-ui/react";
import { apptheme } from "./theme";
import SignUp from "./components/SignUp/signUp";

function App() {
  return (
    <ChakraProvider theme={apptheme}>
      <Container>
        <Center>
          <SignUp />
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default App;
