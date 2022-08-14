import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './FormContact.css'
import Swal from 'sweetalert2';



function ToUpdateContact () {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const navegador = useNavigate() 

    const {id} = useParams();


    useEffect(() => {
        axios.get(`http://localhost:3001/contatos/${id}`)
      .then((r)=> {
       setName(r.data.name)
       setPhone(r.data.phone)
       setEmail(r.data.email)
       setAddress(r.data.address)
      });
      },[id]);

      const datos ={
        name: name,
        phone: phone,
        email: email,
        address: address,
        };

      function Atualizar (e) {
        e.preventDefault();
        axios.put(`http://localhost:3001/contatos/${id}`, datos)
        Swal.fire({
           icon:"success",
          title:"Contato Atualizado",
        }
        )
        .then(navegador('/'));
      }

    return(
        <div className='form-container'>
            <h2>Atualizar</h2>
            <form className="form">
                <input 
                type="text" 
                name='name' 
                placeholder='Nome' 
                onChange={(e)=> setName(e.target.value)}
                value={name}
                required
                className="form-control"
                 />
                <input 
                type="text" 
                name='phone' 
                placeholder='Telefone' 
                onChange={(e)=> setPhone(e.target.value)} 
                value={phone}
                required
                className="form-control"
                />
                <input 
                type="text" 
                name='email' 
                placeholder='Email'
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                required
                className="form-control"
                 />
                <input
                 type="text"
                  name='address' 
                  placeholder='Endereço'
                  onChange={(e)=> setAddress(e.target.value)}
                   value={address}
                   required
                   className="form-control"
                   />
                <Button className='btn btn-sucess' onClick={Atualizar}> Atualizar</Button>
            </form>
        </div>
    )
}

export {ToUpdateContact};
