import { Center, ChakraProvider, Container} from "@chakra-ui/react";
import { apptheme } from "./theme";
import { signUp } from "./components/SignUp/signUp";

function App() {
  return (
    <ChakraProvider theme={apptheme}>
      <Container>
        <Center>
          {signUp()}
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default App;
