import React, { useState} from 'react'
import { getEventsAfterEspecifiedDate } from '../../utils/functions'
import EventCard from '../../components/EventCard/EventCard'
import { StyledDateDisplay, StyledFilterCard, StyledInputDate, StyledMainDisplay } from './Styled'
import { formatDate } from '../../utils/functions'
export default function ByDate() {
    const [ events, setEvents] = useState(null)
const handleSearch = () => {
        const data = document.getElementById('date')
        getEventsAfterEspecifiedDate(data.value,setEvents)
}
const handleChange = () => {

} 
    return (
        <StyledMainDisplay>
        <StyledFilterCard>
            <StyledInputDate onChange={handleChange} id="date" type="date"/>
            <button className="btn btn-primary" onClick={handleSearch}>Pesquisar</button>
        </StyledFilterCard>
        <StyledDateDisplay>
        {(events==null)? <p>Nenhum evento</p> : (events=="Nenhum evento após essa data")?<p>Nenhum evento após essa data</p>:
        events.map((event)=>{
            return <EventCard name={event.name} description={event.description} date={formatDate(event.date)} id={event.id} />
    })}
        </StyledDateDisplay>
        </StyledMainDisplay>
    )
}
