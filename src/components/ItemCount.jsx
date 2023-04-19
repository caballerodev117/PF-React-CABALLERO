import { useState } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [showToast, setShowToast] = useState(false);

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
    setShowToast(true);
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <Button variant="secondary" disabled={count < 1} onClick={handleSubstract}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <span className="mx-2">{count}</span>
        <Button variant="secondary" disabled={count >= stock} onClick={handleAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Button variant="success" disabled={stock <= 0} onClick={handleAddToCart} className=" btn-custom ms-3">
          Agregar al carrito
        </Button>
      </div>
      <Row className="mt-3">
        <Col>
          <Toast onClose={() => setShowToast(false)} show={showToast} delay={3200} autohide>
            <Toast.Header className="bg-success text-white">
              <strong className="me-auto">Producto agregado al carrito</strong>
            </Toast.Header>
            <Toast.Body>¡El producto fue agregado exitosamente al carrito!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </>
  );
};

export default ItemCount;
