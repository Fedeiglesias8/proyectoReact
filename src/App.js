import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartList from './components/CartList/CartList';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
          <Route path='/CartList' element={<CartList />}/>
          <Route path='/Checkout' element={<Checkout />}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
