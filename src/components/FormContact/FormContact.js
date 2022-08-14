import React, { useState} from 'react';
import Swal from 'sweetalert2';
import './FormContact.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';


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
        return  <div className='form-container'>
            <h2>Cadastrar</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                name='name' 
                placeholder='Nome' 
                onChange={handleChange}
                value={data.name}
                className="form-control"
                required
                 />
                <input 
                type="number" 
                name='phone' 
                placeholder='Telefone' 
                mask="(xx) xxxx-xxxx"
                onChange={handleChange} 
                value={data.phone}
                className="form-control"
                required
                />
                <input 
                type="text" 
                name='email' 
                placeholder='Email'
                onChange={handleChange}
                value={data.email}
                className="form-control"
                required
                 />
                <input
                 type="text"
                  name='address' 
                  placeholder='Endereço'
                  onChange={handleChange}
                   value={data.address}
                   className="form-control"
                   required
                   />
                <Button type='submit' className='btn btn-sucess'> Cadastrar</Button>
            </form>
        </div>
}
export {AddContact};
