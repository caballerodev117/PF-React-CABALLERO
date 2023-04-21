import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useCartContext } from '../context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function Checkout() {
    const { cart, totalPrice, clearCart } = useCartContext();
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        email2: '',
        phone: '',
        address: '',
    });
    const [orderId, setOrderId] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.email !== form.email2) {
            alert('Los correos electrónicos no coinciden');
            return;
        }
        const db = getFirestore();
        const ordersCollection = collection(db, 'Orders');
        const newOrder = {
            buyer: {
                name: form.name,
                lastName: form.lastName,
                email: form.email,
                phone: form.phone,
                address: form.address,
            },
            items: cart.map((product) => ({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity: product.quantity,
            })),
            date: new Date(),
            total: totalPrice(),
        };
        addDoc(ordersCollection, newOrder)
            .then((docRef) => {
                setOrderId(docRef.id);
                clearCart();
            })
            .catch((error) => console.log('Error al guardar la orden: ', error));
    };

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {orderId ? (
                <>
                    <h2>¡Gracias por tu compra!</h2>
                    <h3>Tu orden llegará dentro de las próximas 2 horas</h3>
                    <p>Tu número de orden es: {orderId}</p>
                    <p>Estos son los datos del envío:</p>
                    <ul>
                        <li>Nombre: {form.name} {form.lastName}</li>
                        <li>Teléfono: {form.phone}</li>
                        <li>Correo electrónico: {form.email}</li>
                        <li>Dirección: {form.address}</li>
                    </ul>
                    <Button variant="warning">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            Volver a la tienda
                        </Link>
                    </Button>
                    <hr />
                </>
            ) : (
                <Form onSubmit={handleSubmit} style={{ width: '50%' }}>
                    <Form.Group controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="email2">
                        <Form.Label>Confirmar correo electrónico</Form.Label>
                        <Form.Control type="email" name="email2" value={form.email2} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="tel" name="phone" value={form.phone} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="address">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" name="address" value={form.address} onChange={handleChange} required />
                    </Form.Group>
                    <hr />
                    <h4>Resumen de la compra</h4>
                    {cart.map((product) => (
                        <div key={product.id}>
                            <p>
                                {product.title} x {product.quantity} = ${product.price * product.quantity}
                            </p>
                        </div>
                    ))}
                    <p>Total: ${totalPrice()}</p>
                    <hr />
                    <Button variant="success" type="submit" style={{ width: '100%', marginBottom: '20px' }}>
                        Comprar
                    </Button>
                </Form>
            )}
        </div>
    );
}

export default Checkout;