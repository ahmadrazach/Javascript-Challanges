
import './App.css';
import Header from './components/Header';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import {BorwserRouter,Routes,Route, BrowserRouter} from 'react-router-dom';
import CartScreen from './screens/CartScreen';

const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
    <main className='py-3'>
      <Container>
      <Routes>
        <Route path='/cart:id' element={<CartScreen/>}/>
        <Route exact path='/' element={<HomeScreen/>}/>
      </Routes>
      </Container>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
