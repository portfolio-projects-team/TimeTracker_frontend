import { Center, ChakraProvider, Container} from "@chakra-ui/react";
import { apptheme } from "./theme";
import NavBar from "./components/Navbar/navbar";


function App() {
  return (
    <ChakraProvider theme={apptheme}>
      <Container>
        <Center>
          <NavBar />
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default App;
