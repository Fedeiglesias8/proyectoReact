import './ItemDetail.css'
import Counter from "../Counter/Counter";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({img, name, price, id, description, stock, category}) =>{

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (count) => {

        const productToAdd = {
            id, name, price, count
        }
        addItem(productToAdd)
    }

        return(
            <div className='cajaItemDetail'>
                <div>
                    <img className='imagenItemDetail' src={img} alt={category} />
                </div>
                <div className='bodyItemDetail'>
                    <h3>{name}</h3>       
                    <h6>{description}</h6>
                    <p>${price}</p>
                </div>
                {
                   !isInCart(id)
                        ?<Counter onAdd={handleOnAdd} stock={stock} /> 
                        : <Link to={'/CartList'} className='finalizarCompra'>Finalizar compra</Link>
                } 
            </div>
        )

}

export default ItemDetail