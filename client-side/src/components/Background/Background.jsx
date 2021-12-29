import React from 'react'
import Display from '../../views/Display/Display'
import Header from '../Header/Header'
import { StyledBackground } from './Styled'

export default function Background() {
    return (
       <StyledBackground>
           <Header/>
           <Display/>
       </StyledBackground>
    )
}
