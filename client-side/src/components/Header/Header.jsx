import React from 'react'
import { HeaderContainer, LogoContainer, MenuBar, MenuButton } from './Styled'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <HeaderContainer>
            <Link to={'/'}><LogoContainer /></Link>
            <MenuBar>
            <Link to={'/login'}><MenuButton>Login</MenuButton></Link>
            <Link to={'/eventos'}><MenuButton>Eventos</MenuButton></Link>  
            </MenuBar>
        </HeaderContainer>
    )
}
