import styled from 'styled-components'

export const Button= styled.button`
background: ${ props => props.isBack ? 'transparent' :'rgba(0, 0, 0, 0.8)'};
width: 342px;
height: 58px;
border-radius: 14px;
border: ${ props => props.isBack ? '1px solid #ffffff' : 'none'};

margin: 50px 10px 50px 10px;

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
    transform: ${ props => props.isBack && 'rotateY(180deg)'};
}
`;