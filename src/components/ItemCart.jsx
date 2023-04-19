import { useCartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";


function ItemCart({ product }) {
    const { removeProduct } = useCartContext();
    return (
        <div>
            <img src={product.img} alt={product.title}  style={{ maxWidth: '70vh' }}/>
            <div>
                <p>Producto: {product.description} </p>
                <p>Cantidad: {product.quantity} </p>
                <p>Precio x unidad: {product.price} </p>
                <p>Subtotal: $ {(product.quantity) * (product.price)} </p>
                <Button className="btn-delete" variant = "danger" onClick={() => removeProduct(product.id)}>Eliminar del Carrito</Button>

            </div>
        </div>
    )
}

export default ItemCart;