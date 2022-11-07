import './Checkout.css'
import FormCheckout from '../FormCheckout/FormCheckout'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import {db} from '../../services/firebase/index'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {Spinner} from 'reactstrap'

const Checkout =()=>{

    const {clearCart, cart, total} = useContext(CartContext)
    const [loading, setLoading]= useState(false)
    const navigate= useNavigate()
  
    const createOrder= async() =>{
        setLoading(true)

        try{
            const objOrder={
                comprador:{
                    name: 'fede iglesias',
                    email: 'fedeiglesias6@gmail.com',
                    phone: '121212121',
                    address:'dededee'
                },
                items: cart,
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids= cart.map(prod => prod.id)

            const productRef= collection(db, 'products')

            const productsAddedFromFirestore= await getDocs(query(productRef, where(documentId(), 'in', ids)))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc=>{
                const dataDoc= doc.data()
                const stockDb= dataDoc.stock

                const productAddedToCart= cart.find(prod=> prod.id === doc.id)
                const prodQuantity= productAddedToCart?.count

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded= await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000);

                swal({
                    title:'El id de su compra es:',
                    text: orderAdded.id,
                    icon: 'success',
                    button:'Aceptar'
                })
            }else{
                clearCart()
                
                swal({
                    title:'Lo sentimos un producto se encuentra fuera de stock.',
                    icon: 'error',
                    button:'Aceptar'
                })
            }
        } catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
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
            <FormCheckout/>
            <div className='botonesCheckout'>
                <Link to={'/CartList'} className='botonCancelar'>Cancelar</Link>
                <button onClick={createOrder} className='botonFinalizarCompra' >Finalizar compra</button>
            </div>
        </div>
    )
}

export default Checkout