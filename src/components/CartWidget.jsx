import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartWidget() {
  return (
    <div className="cart-icon">
      <button className="btn">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">0</span>
      </button>
    </div>
  );
}

export default CartWidget;