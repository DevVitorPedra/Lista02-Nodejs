import styled from "styled-components";

export const StyledNewEventForm = styled.form`
    width:280px;
    height:480px;
    border-radius:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:5px;
    background: rgba(255, 255, 255, 0.37);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.4px);
    -webkit-backdrop-filter: blur(6.4px);
    border: 1px solid rgba(255, 255, 255, 0.21);
`
export const StyledNewEventInput = styled.input`
    border:none;
    border-bottom:1px solid black;
    background-color:transparent;
    outline:none;
    margin-top:-10px;
    margin-bottom:22px;
    ::placeholder{
        color:rgba(255,255,255,0.5);
    }


`
