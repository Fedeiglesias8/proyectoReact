import './NavBar.css';
import logo from './assets/logoChiappone.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className='header'>
            <img  className='logo' src={logo} alt='logo' />
            <div className='botonesHeader'>
                <button className='botonInicio'> Inicio</button>
                <button className='botonRegulable'> Suspension Regulable</button>
                <button className='botonFija'> Suspension fija</button>
                <button className='botonEspirales'> Espirales</button>
            </div>
            <CartWidget />
        </nav>
        )
}

export default NavBar;