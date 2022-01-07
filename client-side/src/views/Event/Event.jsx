import React, { useState, useEffect, useContext } from 'react'

import { useParams } from 'react-router-dom';
import { TempDataContext } from '../../components/Context/TempDataContext';
import Delete from '../../components/DeleteButton/Delete';
import UserCard from '../../components/UserCard/UserCard';
import { getEvent } from '../../utils/functions';

import { StyledDeleteButton, StyledEventMainCard, StyledEventPs, StyledEventTitle } from './Styled'

export default function Event() {
    const match = useParams()
    const [event, setEvent] = useState(null)
    

    useEffect(() => {
        getEvent(match.id, setEvent)
    }, [])


    return (
        (event == null) ? <h1>loading</h1> : (
            <StyledEventMainCard >
                <Delete event={event.name} id={event.id}/>
                <StyledEventTitle>{event.name}</StyledEventTitle>
                <StyledEventPs>Descrição: {event.description}</StyledEventPs>
                <StyledEventPs>Data: {event.date}</StyledEventPs>
                <StyledEventPs>Local: {event.eventPlace}</StyledEventPs>


               <UserCard id={event.owner.id} key={event.owner.id} />
                <details>
                    <summary>Convidados</summary>
                    {event.guests.map((guest) => {
                        return <UserCard key={guest.id} id={guest.id} />
                    })}
                </details>

            </StyledEventMainCard>
        )

    )
}
