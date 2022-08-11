import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';

function TableContact () {
 const [ListaContatos, setListaContatos] = useState([]);

  
    const cargarContatos = () => {
      axios.get('http://localhost:3001/contatos')
      .then((res)=> {
       setListaContatos(res.data);
      })
    };

    useEffect(() => {
      cargarContatos()
    }, []);
  

  function Delete(id){
    axios.delete (`http://localhost:3001/contatos/${id}` )
    .then(
      cargarContatos()
    )
  }

  return ( 
    <Table striped bordered hover variant="dark" className='datospersonas'>
    <thead>
      <tr>
      <th>Nr</th>
      <th>Nome</th>
      <th>Telefone</th>
      <th>Email</th>
      <th>Endereço</th>
      <th>Açoes</th>
      </tr>
    </thead>
    <tbody>
      {ListaContatos.map((contatos, id) => 
          <tr key={id}>
            <td>{id +1}</td>
           <td>{contatos.name}</td>
          <td>{contatos.phone}</td>
          <td>{contatos.email}</td>
          <td>{contatos.address}</td>
         <td><Link to={`/FormContact/ToUpdateContact/${contatos.id}`} >Atualizar</Link>  <button onClick={()=>Delete(contatos.id)}>Apagar</button></td>
        </tr>
        )
      }
    </tbody>
  </Table>
  
  )
}
export {TableContact};
