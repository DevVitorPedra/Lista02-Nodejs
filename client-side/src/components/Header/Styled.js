import styled from 'styled-components'
import devinhouse from '../../assets/images/devinhouse.png'
export const HeaderContainer = styled.header`
    
    width:100vw;
    height:140px;
 background:rgba(0,0,0,0.1);
    background-size:cover;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
    
`
export const LogoContainer = styled.div`
    height:80px;
    width:240px;
    
    display:flex;
    justify-content:center;
    align-items:center;
    background-image:url(${devinhouse});
    background-size:contain;
    background-repeat:no-repeat;
   
`
export const MenuBar = styled.nav`
    width:80%;
    height:30px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;

`
export const MenuButton = styled.button`
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width:70px;
    height:28px;
    border-radius:20px;
    border:none;
    background-color:rgba(20,20,20,0.2);
    color:white;
    &:hover{
        transform:scale(1.2);
        background-color:white;
        color:purple;
        box-shadow: 0px 0px 20px 2px white;
    }
`