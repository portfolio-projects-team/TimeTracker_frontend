import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Center, ChakraProvider, Container } from '@chakra-ui/react';
import { apptheme } from './theme';
import { SignUp } from './components/SignUp/signUp'; // Replace with your other component import

function App() {
  return (
    <ChakraProvider theme={apptheme}>
      <Container>
        <Center>
          <Router>
            <Routes>
              <Route path="/" />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </Center>
      </Container>
    </ChakraProvider>
  );
}

export default App;
