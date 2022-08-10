import React, { useState} from 'react';
import Swal from 'sweetalert2';
import '../FormContact/FormContact.css'
import {useForm} from "react-hook-form"

const FormContact =() => {
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const {register} = useForm();

 

    const data ={
        "name": name,
        "phone": phone,
        "email": email,
        "address": address,
        }

     const messages = {
         req: "Este campo es obligatorio",
         name: "El formato introducido no es el correcto",
        mail: "Debes introducir una dirección correcta",
        phone: "Debes introducir un número correcto"
     };
    
     const patterns = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{7,14}$/ 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


        const response = await fetch('http://localhost:3001/contatos/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
          });
          
          if (response.status === 201) {
            Swal.fire(
                "Cadastrado con Sucesso"
            )
          } else {
            Swal.fire(  
                "Error"
            )
          }          
      }
    
        return  <div className='Form-Container'>
            <h3>Cadastrar</h3>
            <form onSubmit={handleSubmit} className="form">
                <input 
                
               {...register("name", {required : messages.required, pattern:{value: patterns.name,
                    message: messages.name}})}
                type="text" 
                name='name' 
                placeholder='Nome' 
                onChange={(e)=> setName(e.target.value)}
                value={name}
                required
                 />
                <input 
                 {...register("telefone", {required : messages.phone})}
                type="text" 
                name='phone' 
                placeholder='Telefone' 
                onChange={(e)=> setPhone(e.target.value)} 
                value={phone}
                required
                />
                <input 
                   {...register("email", {required : messages.mail})}
                type="text" 
                name='email' 
                placeholder='Email'
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                required
                 />
                <input
                   {...register("endereço", {required : messages.req})}
                 type="text"
                  name='address' 
                  placeholder='Endereço'
                  onChange={(e)=> setAddress(e.target.value)}
                   value={address}
                   required
                   />
                <input type="submit" value="Cadastrar" />
               
            </form>
        </div>
}

export {FormContact};