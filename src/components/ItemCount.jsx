import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubstract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="d-flex align-items-center">
      <Button variant="secondary" disabled={count < 1} onClick={handleSubstract}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <span className="mx-2">{count}</span>
      <Button variant="secondary" disabled={count >= stock} onClick={handleAdd}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
      <Button variant="primary" disabled={stock <= 0} onClick={handleAddToCart} className="ms-3">
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;