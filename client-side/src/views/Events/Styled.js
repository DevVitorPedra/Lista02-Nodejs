import styled from "styled-components";

export const StyledDisplay = styled.main`
    height:380px;
    width:100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:20px;
    padding:15px;
    overflow-y:scroll;
` 

export const StyledCreateButton = styled.button`
padding:5px;
font-size:50px;
color:rgba(0,0,0,0.5);
    width:220px;
    height:200px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background: rgba(255, 255, 255, 0.37);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.4px);
    -webkit-backdrop-filter: blur(6.4px);
    border: 1px solid rgba(255, 255, 255, 0.21);
    &:hover{
        color:rgba(0,0,0,0.8);
        font-size:70px;
    }
`