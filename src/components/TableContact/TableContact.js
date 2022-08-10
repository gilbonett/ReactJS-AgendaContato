import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';



const TableContact =() => {
 const [ListaContatos, setListaContatos] = useState([]);


 function ReadContact() {
    fetch('http://localhost:3001/contatos')
      .then((response) => response.json())
      .then(data => setListaContatos(data));
  }
  
  useEffect(() => {
    ReadContact();
  }, [])

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
            <td>{contatos.id}</td>
           <td>{contatos.name}</td>
          <td>{contatos.phone}</td>
          <td>{contatos.email}</td>
          <td>{contatos.address}</td>
          <td><button>Atualizar</button><button>Apagar</button></td>
        </tr>
        )
      }
    </tbody>
  </Table>
  
  )
}



export {TableContact};