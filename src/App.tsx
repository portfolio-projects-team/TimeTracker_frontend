import { Center, ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { apptheme } from "./theme";

function App() {
  return (
    <>
      <ChakraProvider theme={apptheme}>
        <Container>
          <Center h="100vh">
            <Heading>App coming soon!</Heading>
          </Center>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
