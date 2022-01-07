import React, { useContext} from 'react'
import { StyledDeleteButton } from '../../components/DeleteButton/Styled'
import {RiDeleteBinLine} from 'react-icons/ri'
import { useParams } from 'react-router'
import { ModalContext } from '../Context/OpenModalContext'
import { TempDataContext } from '../Context/TempDataContext'
export default function Delete(props) {
    const {modal,setModal} = useContext(ModalContext)
    const {temp, setTemp} = useContext(TempDataContext)
    
    const handleClick = () =>{
        setModal(1)
        setTemp([props.event,props.id])
    }

    return (
        <StyledDeleteButton onClick={handleClick}><RiDeleteBinLine/></StyledDeleteButton>

    )
}
