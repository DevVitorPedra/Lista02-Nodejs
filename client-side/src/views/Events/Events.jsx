import React, { useEffect, useState } from 'react'
import { formatDate } from '../../utils/functions'
import EventCard from '../../components/EventCard/EventCard'
import { getInfo } from '../../utils/functions'
import { StyledDisplay } from './Styled'

export default function Events() {
    const [events, setEvents] = useState(null)
    useEffect(() => {
        getInfo(setEvents)
        console.log(events)
    }, [])
    return (
        <StyledDisplay>
           {(events===null)?<h1>Loading</h1> : (events.map((event)=>{
              return <EventCard name={event.name} description={event.description} date={formatDate(event.date)} id={event.id} />
           })) }
        </StyledDisplay>
    )
}
