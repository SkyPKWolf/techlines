import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import ProductsSreen from './screens/ProductsSreen'
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/products' element={<ProductsSreen />} ></Route>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
