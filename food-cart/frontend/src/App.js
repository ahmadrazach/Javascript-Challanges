
import Header from './components/Header';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
const HomeScreen=lazy(()=>import('./screens/HomeScreen'));
const CartScreen =lazy(()=>import('./screens/CartScreen')) ;

const App=()=> {
  return (
    <BrowserRouter>
      <Header/>
      <main className='py-3'>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/cart' element={<CartScreen/>}/>
              <Route exact path='/' element={<HomeScreen/>}/>
            </Routes>
          </Suspense>
        </Container>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
