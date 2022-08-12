import React, { useState} from 'react';
import Swal from 'sweetalert2';
import './Create.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddContact =() => {
    
    const [data, setData] = useState({name:'', phone:'', email:'', address:''})

const navegador = useNavigate()

  
const handleChange = ({target}) => {
    setData({
        ...data,
        [target.name]: target.value
    })
}

const URL = "http://localhost:3001/contatos"

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(URL,data);
    if (response.status === 201) {
        Swal.fire(
            'Salvo!',
            `O contato ${response.data.name} salvo exitosamente!`,
            'success'
        )
        navegador('/');
        
    }else {
        Swal.fire(
            'Error!',
            'Teve  problema ao criar o registro!',
            'error'
        )
    }
}
        return  <div className='Form-Container'>
            <h3>Cadastrar</h3>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='name' 
                placeholder='Nome' 
                onChange={handleChange}
                value={data.name}
                required
                 />
                <input 
                type="text" 
                name='phone' 
                placeholder='Telefone' 
                onChange={handleChange} 
                value={data.phone}
                required
                />
                <input 
                type="text" 
                name='email' 
                placeholder='Email'
                onChange={handleChange}
                value={data.email}
                required
                 />
                <input
                 type="text"
                  name='address' 
                  placeholder='Endereço'
                  onChange={handleChange}
                   value={data.address}
                   required
                   />
                <button> Cadastar</button>
            </form>
        </div>
}
export {AddContact};
