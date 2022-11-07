import './FormCheckout.css'
import { useState, createContext } from 'react';

const FormCheckout =({dataInputs})=>{

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    return(
        <form>
            <div className='cajaInputs'>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text"  placeholder='Nombre completo' required/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Email' required/>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number"  placeholder='Numero de telefono' required/>
                <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text"  placeholder='Direccion' required/>
            </div>
        </form>
    )
}

export default FormCheckout;