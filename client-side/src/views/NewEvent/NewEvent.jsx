import React, { useContext } from 'react'
import { ModalContext } from '../../components/Context/OpenModalContext'
import { TempDataContext } from '../../components/Context/TempDataContext'

import { MenuButton } from '../../components/Header/Styled'
import { createNewEvent } from '../../utils/functions'

import { StyledNewEventForm, StyledNewEventInput } from './Styled'

export default function NewEvent() {
    const { modal,setModal } = useContext(ModalContext)
    const {temp, setTemp} = useContext(TempDataContext)
    const handleNewEvent = (e) => {
       e.preventDefault()
            const authorName = document.getElementById('autorname')
            const eventName = document.getElementById('eventname')
            const description = document.getElementById('description')
            const date = document.getElementById('data')
            const guests = document.getElementById('guests')
            const local = document.getElementById('local')
            const guestsArray = guests.value.split(',')
            const body = {
                id:50,
                name:eventName.value,
                description:description.value,
                date:date.value,
                eventPlace:local.value,
                guests:guestsArray,
                owner:authorName.value
            }
            createNewEvent(body,setModal,setTemp)
    }
    return (
       <StyledNewEventForm>
           <label >Nome do Evento</label>
           <StyledNewEventInput id="eventname" />
           <label >Nome do Autor</label>
           <StyledNewEventInput id="autorname" />
           <label >Descrição</label>
           <StyledNewEventInput id="description" type="text"/>
           <label>Local</label>
           <StyledNewEventInput id="local"/>
           <label >data</label>

           <StyledNewEventInput id="data"type="date"/>
           <label>Convidados</label>
           <StyledNewEventInput id="guests" placeholder="Id's separados por vigula"/>
           <MenuButton type="submit"onClick={handleNewEvent}>Criar</MenuButton>
       </StyledNewEventForm>
    )
}
