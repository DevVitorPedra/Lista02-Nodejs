import React,  {useState} from 'react'
import Display from '../../views/Display/Display'
import { ModalContext } from '../Context/OpenModalContext'
import { TempDataContext } from '../Context/TempDataContext'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Modal from '../Modal/Modal'

import { StyledBackground } from './Styled'

export default function Background() {
    const [modal,setModal] = useState(0)
    const [temp,setTemp] = useState([])

    return (
       <StyledBackground>
           <ModalContext.Provider value={{modal, setModal}}>
           <TempDataContext.Provider value={{ temp, setTemp}}>
           <Header/>
           <Display/>
           <Footer/>
           {
                        modal === 1 ? <Modal event={temp[0]} id={temp[1]} /> : null
                    }
           </TempDataContext.Provider>
           </ModalContext.Provider>
       </StyledBackground>
    )
}
