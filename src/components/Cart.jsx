import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart';
import { Button } from 'react-bootstrap';
import { getFirestore, collection, doc, addDoc, updateDoc } from 'firebase/firestore';

function Cart() {
  const { cart, totalPrice } = useCartContext();

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
      .then(({ id }) => console.log(id))

  }

  if (cart.length === 0) {
    return (
      <>
        <p>No hay productos en tu carro de compras</p>
        <Button variant= "warning"> <Link to='/' style={{ textDecoration: 'none' }}>volver a la tienda</Link> </Button>
      </>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {cart.map(product => <ItemCart key={product.id} product={product} />)}
      <p className='total-price'>total: $ {totalPrice()} </p>
      <Button className='btn-order' variant="success" onClick={handleClick}>Generar orden de compra</Button>
    </div>
  )
}

export default Cart;