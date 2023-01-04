import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Table , Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import './InformationContact.css';

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
             Swal.fire ({
              title:"Removido",
              icon:"success"
             })
              }
              cargarContatos()
          } catch (error) {
            
          }
        } 
      });
  };

  return ( 
    <div> 
       <Form className='containerSearch'> 

       <Form.Control
            input value={search}
            type="text"
            placeholder="Pesquisar Contatos"
            className="me-2"
            aria-label="Search"
            onChange={buscador}
        />
        </Form> 
    <div className='container-table'>
      <Table striped hover>
    <thead className='thead'>
      <tr>
      <th>Nr</th>
      <th>Nome</th>
      <th>Telefone</th>
      <th>Email</th>
      <th>Endereço</th>
      <th>Açoes</th>
      </tr>
    </thead>
    <tbody className="tbody">
      {resultadoBusqueda.map((contact, id) => 
          <tr key={id}>
            <td>{id +1}</td>
           <td>{contact.name}</td>
          <td>{contact.phone}</td>
          <td>{contact.email}</td>
          <td>{contact.address}</td>
         <td><Link to={`FormContact/ToUpdateContact/${contact.id}`}><img src="assets/lapiz1.png" alt="lapiz" width="25px" /></Link> 
          <button className='deletarbutton' onClick={()=>Delete(contact.id)}><img src="assets/compartimiento.png" width="25px" alt="" /></button>
          </td>
        </tr>
        )
      }
    </tbody>
  </Table>
    </div>
  </div>
  )
}
export {InformationContact};
