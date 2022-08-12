import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';


function InformationContact () {
 const [contatos, setContatos] = useState([]);
 const [search, setSearch] = useState("");

 
  //funtion para trazer os datos da API
     const cargarContatos = async () => { 
       axios.get('http://localhost:3001/contatos') 
      .then((res)=> {
       setContatos(res.data);
      })
    };

    //function para procurar
     const buscador = (e) => {
      setSearch(e.target.value)
    }

    //function para procurar
    
    let resultadoBusqueda = []
    if(!search){
      resultadoBusqueda = contatos
    } else {
      resultadoBusqueda = contatos.filter((dato) =>
       dato.name.toLowerCase().includes(search.toLocaleLowerCase())
       ) 
    } 

    useEffect(() => {
      cargarContatos()
    }, []);
  
   const Delete = async (id) => { 
    Swal.fire (
      {
        icon: 'warning',
        title:"Deseja Apagar o Contato?",
        text: "Esta ação é irreversivel!!",
        showCancelButton : true,
        confirmButtonColor: "#fd1d1d",
        confirmButtonText: "Eliminar",
        cancelButtonColor: "#1737bc", 
        cancelButtonText : "Não"
      }
    ).then (
      async res => { 
        if ( res.value) {
          try {
            const response = await axios.delete (`http://localhost:3001/contatos/${id}`)
              if  (response.status === 200) {
             Swal.fire ("Eliminado")
              }
              cargarContatos()
          } catch (error) {
            
          }
        } 
      });
  };

  return ( 
    <div>
      <input value={search} onChange={buscador} type="text" placeholder="Search" className='form-control'/>
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
      {resultadoBusqueda.map((contact, id) => 
          <tr key={id}>
            <td>{id +1}</td>
           <td>{contact.name}</td>
          <td>{contact.phone}</td>
          <td>{contact.email}</td>
          <td>{contact.address}</td>
         <td><Link to={`/FormContact/ToUpdateContact/${contact.id}`} >Atualizar</Link>  <button onClick={()=>Delete(contact.id)}>Apagar</button></td>
        </tr>
        )
      }
    </tbody>
  </Table>
  </div>
  )
}
export {InformationContact};
