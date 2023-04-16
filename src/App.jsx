import 'bootstrap/dist/css/bootstrap.css';
import Navbarorganicos from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartContext';
//import Cart from './Cart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbarorganicos />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a tu mercado virtual de Orgánicos del Retiro" />} />
          <Route path="/categoryId" element={<ItemListContainer />} />
          <Route path="/frutas/:categoryId" element={<ItemListContainer />} />
          <Route path="/verduras/:categoryId" element={<ItemListContainer />} />
          <Route path="/hortalizas/:categoryId" element={<ItemListContainer />} />
          <Route path="/otros/:categoryId" element={<ItemListContainer />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
         
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;


