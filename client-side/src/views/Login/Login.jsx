import React from 'react'
import { Link } from 'react-router-dom'
import { MenuButton } from '../../components/Header/Styled'
import { StyledForm, StyledInput } from './Styled'

export default function Login() {

    const handleLogin = () => {

    }
    return (
        <StyledForm>
            <label htmlFor="">Nome</label>
            <StyledInput type="text" />
            <label htmlFor="">Profissão</label>
            <StyledInput type="text" placeholder=""/>
            <MenuButton onClick={handleLogin}>Login</MenuButton>
            <div><p>Ainda não possui conta? </p><Link to={'/login'}>registre-se</Link></div>
        </StyledForm>
    )
}
