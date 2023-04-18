import { useState } from 'react';
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { Button } from 'react-bootstrap';

function ItemDetail({ data }) {

  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (
    <div className='container'>
      <div className='detail'>
        <img className='detail_image' src={data.img} alt={data.description} />
        <div className='content'>
          <h1>{data.title}</h1>
          <p>{data.price} </p>
          <div>
            <ItemCount initial={1} stock={8} onAdd={onAdd} />
            {goToCart && <Link to='/cart'>
              <Button variant="warning"> Terminar compra </Button>
            </Link>}
            <Link to="/">
              <Button variant="info"> Continuar comprando </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
