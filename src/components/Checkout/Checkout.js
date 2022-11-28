import './Checkout.css'
import FormCheckout from '../FormCheckout/FormCheckout'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {Spinner} from 'reactstrap'
import { useOrdersFromFirestore } from '../../services/firestore/orders';

const Checkout =()=>{

    const {clearCart} = useContext(CartContext)
    const [loading, setLoading]= useState(false)
    const [personalData, setPersonalData]= useState(false)
    const [datosCompra, setDatosCompra] = useState({}) 
    
    const completoDatos=(name, email, phone, address)=>{
        setDatosCompra({name, email, phone, address})
        setPersonalData(true)
        console.log(datosCompra)
    }

    const navigate= useNavigate()

    const {createOrder}= useOrdersFromFirestore()

    const getOrder= () =>{
        setLoading(true)

        createOrder(datosCompra).then(response=>{
            if(response.result === 'orderCreated'){
                clearCart()

                swal({
                    title:'El id de su compra es:',
                    text: `${response.id}`,
                    icon: 'success',
                    button:'Aceptar'
                })
                navigate('/')
                
            }else{
                clearCart()
                
                swal({
                    title:'Lo sentimos un producto se encuentra fuera de stock.',
                    icon: 'error',
                    button:'Aceptar'
                })
            }
        }).catch(error=>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }

    if(loading){
        return(
            <div className='spinner'>
                <Spinner color='secondary' />
            </div>
        ) 
    }

    return(
        <div>
            <FormCheckout completoDatos={completoDatos}/>
            {personalData
            ?   <div className='botonesCheckout'>
                    <Link to={'/CartList'} className='botonCancelar'>Cancelar</Link>
                    <button onClick={getOrder} className='botonFinalizarCompra' >Finalizar compra</button>
                </div>

            :   ""
            }
            
        </div>
    )
}

export default Checkout