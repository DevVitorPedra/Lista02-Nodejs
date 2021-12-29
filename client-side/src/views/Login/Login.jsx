import React from 'react'
import { Link } from 'react-router-dom'
import { MenuButton } from '../../components/Header/Styled'
import { StyledForm, StyledInput } from './Styled'

export default function Login() {
    return (
        <StyledForm>
            <StyledInput type="text"/>
            <StyledInput type="text"/>
            <MenuButton>Login</MenuButton>
            <div><p>Ainda não possui conta? </p><Link to={'/login'}>registre-se</Link></div>
        </StyledForm>
    )
}
