import React from 'react'
import { Link } from 'react-router-dom'
import { StyledEventCard, StyledEventDate, StyledEventDescription, StyledEventName } from './Styled'

export default function EventCard(props) {
    return (
        <StyledEventCard>
            <StyledEventName>{props.name}</StyledEventName>
            <StyledEventDescription>{props.description}</StyledEventDescription>
            <StyledEventDate>{props.date}</StyledEventDate>
            <Link to={`/evento/${props.id}`}>More info
           </Link>
        </StyledEventCard>
    )
}
