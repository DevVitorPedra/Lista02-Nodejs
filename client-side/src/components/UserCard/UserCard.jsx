import React,{ useState, useEffect} from 'react'
import { getGuestById } from '../../utils/functions'
import { StyledUserCard } from './Styled'

export default function UserCard(props) {
    const [user,setUser] = useState(null)
    useEffect(() => {
        getGuestById(props.id,setUser)
    }, [])
    return (
        user==null? <p>Loading</p> : (
             <StyledUserCard>
           <p>{user.name}</p>
       </StyledUserCard>)
    )
}
