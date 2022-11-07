import './CartList.css';
import CartItem from '../CartItem/CartItem'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartList = () =>{

    const { total, clearCart, cart }= useContext(CartContext)

    if (cart.length === 0)
    return(
        <div className='contenedorCartVacio'>
            <h1 className='carritoVacio'>Su carrito esta vacio...</h1>
            <Link  to={'/'} className='verProductos'> Ver productos</Link>
        </div>
    )

    return(
        <div>
            <div className='contenedorCart'>
                <CartItem/>
             </div>

            <div className='objetosCartList'>
                <h3>Total: ${total}</h3>
                <button className='limpiarCarrtito' onClick={()=> clearCart()}> Vaciar carrito</button> 
            </div>
            <div className='contenedorBotonCheckout'>
                <Link to={'/Checkout'} className='botonCheckout'>Checkout</Link>
            </div>
        </div>
    )
}

export default CartList