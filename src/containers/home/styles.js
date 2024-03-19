import styled from 'styled-components'
import background1 from '../../assets/backgraund1.svg'


export const Container = styled.div`
background: url('${background1}');
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
height: 100%;
min-height: 100vh;

`;

export const Image = styled.img`
margin-top:30px;

`;





export const InputLabel = styled.p`
color: #EEEEEE;
margin-left: 20px;
letter-spacing:-0.41px;
line-height: 22px;
font-weight: 700px;
font-size:18px;
`;

export const Input = styled.input`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
margin-bottom: 25px;
border: none ;
outline: none;
padding-left:25px;
Width:342px;
Height:58px;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
color: #ffffff;
`;



