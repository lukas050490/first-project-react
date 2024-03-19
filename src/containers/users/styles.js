import styled from 'styled-components'
import background2 from '../../assets/backgraund2.svg'


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