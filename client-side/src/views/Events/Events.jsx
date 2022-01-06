import React, { useEffect, useState } from 'react'
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
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </StyledDisplay>
    )
}
