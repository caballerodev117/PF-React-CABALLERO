import { useCartContext } from './CartContext'
import {Link} from 'react-router-dom'
import ItemCart from './ItemCart';
import { getFirestore, collection, doc, addDoc, updateDoc } from 'firebase/firestore';

function Cart() {
  const {cart, totalPrice} = useCartContext();

  const handleClick = ()=>{
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({id})=>console.log(id))

  }
  
  if (cart.length ===0){
    return(
      <>
      <p>No  hay productos en tu carro de compras</p>
      <Link to='/'>Realizar pedido</Link>
      </>
    );
  }

  return (
    <>
    {cart.map(product =><ItemCart key={product.id} product={product}/>)
    }
    <p> total:$ {totalPrice()} </p>
    <button onClick={handleClick}>Generar orden de compra</button>
    </>
  )
}

export default Cart;