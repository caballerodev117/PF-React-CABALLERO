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
        <img className='img-adjust' src={data.img}  style={{ maxWidth: '70vh' }} alt={data.description} />
        <div className='content'>
          <h1>{data.description}</h1>
          <p> ${data.price} </p>
          <div>
            <ItemCount initial={1} stock={8} onAdd={onAdd} />
            {goToCart && <Link to='/cart'>
              <Button className='btn-end' variant="warning"> Terminar compra </Button>
            </Link>}
            <div>
            <Link to="/">
              <Button className='btn-continue' variant="info"> Continuar comprando </Button>
            </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;
