import { Center, ChakraProvider, Container, Heading } from "@chakra-ui/react";
import { apptheme } from "./theme";
import TaskForm from "./TaskForm"

function App() {
  return (
    <>
      <ChakraProvider theme={apptheme}>
        <Container>
          <Center h="100vh">
            {/* <Heading>App coming soon!</Heading> */}
            {/* Include your TaskForm component */}
            <TaskForm />
          </Center>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
