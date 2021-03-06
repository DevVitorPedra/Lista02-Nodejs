import styled from "styled-components";

export const StyledEventCard = styled.div`
padding:5px;
    width:220px;
    height:200px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background: rgba(255, 255, 255, 0.37);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.4px);
    -webkit-backdrop-filter: blur(6.4px);
    border: 1px solid rgba(255, 255, 255, 0.21);
    gap:20px;

`
export const StyledEventName = styled.h3`
font-size:16px;
border-bottom:1px solid black;

    
`
export const StyledEventDescription = styled.p`
    color:black;

`
export const StyledEventDate = styled.p`
    
`

