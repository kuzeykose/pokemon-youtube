import styled from "styled-components";

export const CardContainer = styled.div`
display: grid;
background: white;
justify-content: center;
height: 250px;
margin-left: 10px;
margin-top: 10px;
border-radius: 4px;
cursor: pointer;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
&:hover{
  transform: scale(1.1);
  transition: all .1s ease-in-out;
}
`

export const Title = styled.h2`
color: green;
text-align: center;
`

export const PokemonImage = styled.img`
margin-top: 20px;
height: 120px;
width: 120px;
`