import './NavBar.css';
import logo from './assets/logoChiappone.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className='header'>
            <img  className='logo' src={logo} alt='logo' />
            <div className='botonesHeader'>
                <button className='botonInicio'> Inicio</button>
                <button className='botonNosotros'> Sobre Nosotros</button>
                <button className='botonContactanos'> Contactanos </button>
            </div>
            <CartWidget />
        </nav>
        )
}

export default NavBar;