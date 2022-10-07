import './Counter.css';
import { useState } from 'react';

const Counter = ({stock = 0, initial = 1, onAdd}) => {

    const  [count, setCount] = useState(initial)

     const agregar = () =>{
        if(count < stock){
            setCount (count + 1)
        }
     }
     
      const quitar = () =>{
        if(count > 1){
            setCount (count - 1)
        }
      }

    return(
        <div className='cajaContador'>
            <div className='contador'>
                <h1>{count}</h1>
                    <div className='botonesContador'>
                         <button className='botonMas' onClick={agregar}> + </button>
                         <button className='botonMenos' onClick={quitar}> - </button>
                     </div>
            </div>
            <div className='botonAgregarCarrito'>
                <button  onClick={() => onAdd(count)}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default Counter