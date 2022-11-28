import {  useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import {db} from '../../services/firebase/index'
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'

export const useOrdersFromFirestore = () => {

    const { cart, total} = useContext(CartContext)

    const createOrder= async (datosCompra) =>{

        try{
            const objOrder={
                comprador:datosCompra,
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

                const orderRef = collection(db, 'orders')

                const orderAdded= await addDoc(orderRef, objOrder)

                await batch.commit()
                return{result: 'orderCreated', id: orderAdded.id}
            }else{
                return{ result: 'outOfStockError', products: outOfStock}
            }
        } catch(error){
            return error
        }
    }

    return{
        createOrder,
    }
}