import { useState } from 'react';
import './Counter.css';

const Counter = ({onAdd}) => {

    const  [count, setCount] = useState(0)

     const agregar = () =>{
        if(count < 6){
            setCount (count + 1)
        }
     }
     
      const quitar = () =>{
        if(count > 0){
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
                <button  onClick={onAdd}> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default Counter