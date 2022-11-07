import { useState, useEffect, createContext } from "react";

export const CartContext = createContext()
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const total= getTotalPrice()
        setTotal(total)
    }, [cart])

    const addItem = (productToAdd) =>{
        console.log('se agrego un producto')

        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }
    }

    const isInCart= (id)  =>{
        return cart.some(prod =>prod.id === id)
    }

    const removeProduct= (id) =>{
        const removeProductCart = cart.filter(prod => prod.id !== id) 

        setCart(removeProductCart)
    }

    const clearCart= () =>{
        setCart([])
    }

    const getTotalPrice= () =>{
        let accu= 0

        cart.forEach(prod =>{
            accu += prod.count * prod.price
        })
        return accu
    }

    const carritoVacio= count  =>{
        return cart.some(count === 0)
    }

    return(
        <CartContext.Provider value={{ cart, addItem, isInCart, removeProduct, clearCart, total, carritoVacio}}>
            {children}
        </CartContext.Provider>
    )
}