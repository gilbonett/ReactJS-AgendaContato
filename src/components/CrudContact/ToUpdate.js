import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';


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
        .then(navegador('/'));
      }

    return(
        <div className='Form-Container'>
            <h3>Atualizar</h3>
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
                <button onClick={Atualizar}> Atualizar</button>
            </form>
        </div>
    )
}

export {ToUpdateContact};
