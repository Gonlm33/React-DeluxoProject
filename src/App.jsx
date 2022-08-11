import './App.css';
import Cart from './component/Cart/cart';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import NavBar from "./component/NavBar/NavBar";
import ItemDetailContainer from './component/ItemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';

function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App
