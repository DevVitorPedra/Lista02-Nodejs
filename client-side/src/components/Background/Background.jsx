import React from 'react'
import Display from '../../views/Display/Display'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import { StyledBackground } from './Styled'

export default function Background() {
    return (
       <StyledBackground>
           <Header/>
           <Display/>
           <Footer/>
       </StyledBackground>
    )
}
