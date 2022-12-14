import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {
  const { cart, totalPrice} = useCartContext();

  const order = {
    buyer: {
      name: 'Gonza',
      email:'gonzalm@gmail.com',
      phone: '113637483',
      adress: 'asdasd'
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'order');
    addDoc(ordersCollection, order)
      .then(({ id }) => consol.log(id))
  }

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elemntos en el carrito</p>
        <Link to='/'>Hacer compras</Link>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
        <p>
          total: {totalPrice()}
        </p>
        <button onClick={handleClick}>Emitir compra</button>
    </>
  )
}

export default Cart;