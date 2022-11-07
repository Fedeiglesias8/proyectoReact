import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = () =>{

    const {cart, removeProduct}= useContext(CartContext)

    return(
        cart.map(prod => (
            <div className='contenedorItemCart'>
                <h5 className='nameCart'>{prod.name}</h5>
                <h5 className='cantidadCart'>Cantidad: {prod.count}</h5>
                <h5 className='priceCart'>${prod.price}</h5>
                <h5 className='subtotalCart'>Subtotal: ${prod.price * prod.count} </h5>
                <button className='eliminarCart' onClick={() => removeProduct(prod.id) }>Remover</button>
            </div>
        ))
    )
}

export default CartItem 