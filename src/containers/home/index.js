import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Container, Image, InputLabel, Input } from './styles';
import People from '../../assets/people.svg';
import Arrow from '../../assets/arrow.svg';

import H1 from '../../components/title';
import ContainerItens from '../../components/containerItens';
import Button from '../../components/Button';

const Home = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate(); 

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