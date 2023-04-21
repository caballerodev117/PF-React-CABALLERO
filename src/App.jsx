import 'bootstrap/dist/css/bootstrap.css';
import Navbarorganicos from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbarorganicos />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a tu mercado virtual de Orgánicos del Retiro" />} />
          <Route path="/categoryId/:categoryId" element={<ItemListContainer />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;