import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount"
import React, {useState} from 'react';
// import swal from "sweetalert";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

export const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false)
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    // swal({
    //   title: "Compra",
    //   text: `Compraste ${quantity} unidades`,
    //   icon: "success",
    //   button: "Aceptar",
    // });
    setGoToCart(true);
    addProduct(data, quantity);
    }

  return (
    <div className="container">
        <div className="detail">
            <img className="detail__image" src={data.image} alt="" />
            <div className="content">
                <h1>{data.title}</h1>
                {
                  goToCart
                  ? <Link to='/cart'>Terminar compra</Link>
                  : <ItemCount initial={1} stock={10} onAdd={onAdd}  />
                }
                
            </div>
        </div>
    </div>
  );
}

export default ItemDetail;