import './FormCheckout.css'
import { useState, createContext } from 'react';
import swal from 'sweetalert';

const FormCheckout =({completoDatos})=>{

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    const enviarDatos=(e)=>{
        e.preventDefault();
        if (!name || !email || !phone || !address)
        {
            swal({
                title: "Completa tus datos",
                icon: "warning",
                buttons: true,
                dangerMode: true,
        
            })
        }

    else {
        swal({
            title: "Datos Guardados",
            icon: "success",
            buttons: true,
        })
    completoDatos(
        name,
        address,
        phone,
        email
    )
    }
}


    return(
        <form>
            <div className='cajaInputs'>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text"  placeholder='Nombre completo' required/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Email' required/>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number"  placeholder='Numero de telefono' required/>
                <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text"  placeholder='Direccion' required/>
                <button className='botonConfirmarDatos' onClick={enviarDatos}>Confirmar datos</button>
            </div>
        </form>
    )
}

export default FormCheckout;