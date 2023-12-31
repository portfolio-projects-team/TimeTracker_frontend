import { ChakraProvider, Flex, Box } from '@chakra-ui/react';
import { apptheme } from './theme';
import NavBar from './components/Navbar/navbar';
import Footer  from './components/Footer/footer';

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
        <Box flex="1">{/* Your main content goes here */}</Box>
        <Box>
          <Footer />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
