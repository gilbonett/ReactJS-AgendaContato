import React, { useState} from 'react';
//import Swal from 'sweetalert2';
import '../FormContact/FormContact.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddContact =() => {
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

const navegador = useNavigate()

    const data ={
        name: name,
        phone: phone,
        email: email,
        address: address,
        }

        function Submit (e) {
         e.preventDefault();

          axios.post('http://localhost:3001/contatos', data)
          .then(
            navegador('/')
          )
        }


        return  <div className='Form-Container'>
            <h3>Cadastrar</h3>
            <form className="form">
                <input 
                type="text" 
                name='name' 
                placeholder='Nome' 
                onChange={(e)=> setName(e.target.value)}
                value={name}
                required
                 />
                <input 
                type="text" 
                name='phone' 
                placeholder='Telefone' 
                onChange={(e)=> setPhone(e.target.value)} 
                value={phone}
                required
                />
                <input 
                type="text" 
                name='email' 
                placeholder='Email'
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                required
                 />
                <input
                 type="text"
                  name='address' 
                  placeholder='Endereço'
                  onChange={(e)=> setAddress(e.target.value)}
                   value={address}
                   required
                   />
                <button onClick={Submit}> Cadastar</button>
            </form>
        </div>
}
export {AddContact};
