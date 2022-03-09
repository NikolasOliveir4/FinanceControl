import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Container from './layouts/Container/Container';
import Footer from './layouts/Footer/Footer';
import Navbar from './layouts/Navbar/Navbar';
import Contato from './pages/Contato/Contato';
import Faturas from './pages/Faturas/Faturas';
import Home from './pages/Home/Home'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/faturas' element={<Faturas />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>  
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
