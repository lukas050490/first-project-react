import React, { useState, useRef } from 'react';
import { UseNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from './styles'
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

const Home = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = UseNavigate();

  async function addNewUser() {
    try {
      const response = await axios.post('http://localhost:3001/users', {
        name: inputName.current.value,
        age: inputAge.current.value,
      });
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('erro ao cadastrar usuario:', error);
    }

    navigate('/usuarios'); 
  }

  return (
    <Container >
      <Image alt='logo-image' src={People} />
      <ContainerItens>
        <H1> {'Olá '} </H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />
        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />
        <Button onClick={addNewUser}>
          Cadastrar <img alt='seta' src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Home;