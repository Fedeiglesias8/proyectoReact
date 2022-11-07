import './CartWidget.css'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const CartWidget = () => {

    return (
            <Link to={'/CartList'} className='iconCart' ><FontAwesomeIcon icon={faCartShopping} /></Link>
        )
}

export default CartWidget;