import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCartContext } from '../context/CartContext';

function CartWidget() {
  const { totalProducts } = useCartContext();

  return (
    <div className="cart-icon">
      <button className="btn">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count" style={{ color: 'red', fontWeight: 'bold' }}>{totalProducts() || ''}</span>
      </button>
    </div>
  );
}

export default CartWidget;