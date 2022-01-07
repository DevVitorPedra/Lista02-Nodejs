import styled from "styled-components";

export const StyledDeleteButton = styled.button`
    width:25px;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:25px;
    border:1px solid Black;
    background-color:rgba(255,0,0,0.4);
    position:fixed;
    right:0;
    &:hover{
        background-color:red;
        transform:scale(1.2)
        
    }
`