import React, { useEffect, useState } from 'react'
import { formatDate } from '../../utils/functions'
import EventCard from '../../components/EventCard/EventCard'
import { getInfo } from '../../utils/functions'
import { StyledCreateButton, StyledDisplay } from './Styled'
import { RiMapPinAddFill } from'react-icons/ri'
import { Link } from 'react-router-dom'
export default function Events() {
    const [events, setEvents] = useState(null)
    useEffect(() => {
        getInfo(setEvents)
        console.log(events)
    }, [])
    return (
        <StyledDisplay>
        <Link to={'/novo'}>
           <StyledCreateButton><RiMapPinAddFill/>
           <p style={{fontSize:'16px'}}>novo evento</p></StyledCreateButton>
           </Link>  
           {(events===null)?<h1>Loading</h1> : (events.map((event)=>{
              return <EventCard name={event.name} description={event.description} date={formatDate(event.date)} id={event.id} />
           })) }
        </StyledDisplay>
    )
}
