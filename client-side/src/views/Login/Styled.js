import styled from "styled-components";


export const StyledForm = styled.form`
    width:280px;
    height:380px;
    border-radius:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:35px;
    background: rgba(255, 255, 255, 0.37);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.4px);
    -webkit-backdrop-filter: blur(6.4px);
    border: 1px solid rgba(255, 255, 255, 0.21);
`
export const StyledInput = styled.input`
    min-width:50%;
transition:all 1s ease-out;
    color:white;
    margin:0;
    padding:0;
    border:none;
    border-bottom:1px solid white;
    background-color:rgba(0,0,0,0.2);
    &:focus{
        outline:none;
        border-bottom:1px solid black;
        background-image:linear-gradient(rgba(255,255,255,0.6),rgba(0,0,0,0.3))
    }
`