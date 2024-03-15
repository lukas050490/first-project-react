import React, { useState, useEffect } from 'react';
import {UseNavigate} from 'react-router-dom'
import axios from 'axios';
import { Container, User, H1, Image, ContainerItens, Button } from './styles'
import Avatar from '../../assets/avatares.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'


const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = UseNavigate();

 
  useEffect(() =>{
  async function fetchUsers(){
    try{
    const response = await axios.get('http://localhost:3001/users');
      setUsers(response.data);
     }catch (error){
      console.error('erro ao buscar usuarios',error)
     }
    }
     fetchUsers()
  },[])

   
  
     async function deleteUser (userId){
      try{
      await axios.delete(`http://localhost:3001/users/${userId}`)
      setUsers (users.filter((user) => user.id !== userId));
     }catch (error){
      console.error('erro ao deletar usuario:',error)
     }
      
    
    }

    function goBackPage(){
      navigate('/');
    }
    return (
      <Container >
        <Image alt='logo-image' src={Avatar} />

        <ContainerItens>

          <H1> {'Usuários'} </H1>

          <ul>
            {users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p>-<p>{user.age}</p>
                <button onClick={()=> deleteUser(user.id)}>
                   <img alt='lixo' src={Trash} /></button>
              </User>
            ))}

          </ul>
          <Button onClick={goBackPage} >
           <img alt='seta' src={Arrow} /> Voltar
          </Button>
        </ContainerItens>
      </Container>
    );

            }

  export default Users;
