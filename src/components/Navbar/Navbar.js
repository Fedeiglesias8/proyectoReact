import './NavBar.css';
import logo from './assets/logoChiappone.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='header'>
            <Link  to={'/'}><img  className='logo' src={logo} alt='logo' /></Link>
            
            <div className='botonesHeader'>
                <Link  to={'/'} className='botonInicio'> Inicio</Link>
                <Link  to={'/category/Butacas'} className='botonButacas'> Butacas </Link>
                <Link  to={'/category/suspension regulable'} className='botonSuspeRegulable'> Suspension Regulable</Link>
                <Link  to={'/category/espirales'} className='botonEspriales'> Espirales </Link>
            </div>
            <CartWidget />
        </nav>
        )
}

export default NavBar;