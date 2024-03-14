import styled from 'styled-components'
import background2 from '../../../assets/backgraund2.svg'

export const Container = styled.div`
background: url('${background2}');
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

`;

export const Image = styled.img`
margin-top:30px;

`;

export const ContainerItens = styled.div`
background: linear-gradient(
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
);
border-radius: 61px 61px 0px 0px;
backdrop-filter: blur(45px);
padding: 50px 36px;
display: flex;
flex-direction: column;
height: 100vh;
`;

export const H1 = styled.h1`
font-style: normal;
font-weight: bold;
line-height: 40px;
font-size: 34px;
text-align: center;
color: #FFFFFF;
margin-bottom: 80px;
`;


export const Button= styled.button`
background: transparent;
width: 342px;
height: 58px;
border-radius: 14px;
border: 1px solid #ffffff;

margin-top: 120px ;

color: #ffffff;
font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}
img{
    transform: rotateY(180deg);
}
`;

export const User= styled.li`
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
margin-bottom: 25px;
border: none ;
outline: none;
Width:342px;
Height:58px;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
color: #ffffff;
 
button{
    border: none;
    background: none;
    cursor: pointer;
}

`