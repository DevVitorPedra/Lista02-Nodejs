import React from 'react'
import Login from '../Login/Login'
import Events from '../Events/Events'
import Event from '../Event/Event'
import Intro from '../Intro/Intro'
import { Routes, Route } from 'react-router-dom'
import { DisplayBG } from './Styled'

export default function Display() {
    return (
        <DisplayBG>
            <Routes>
                
            <Route path={'/'} element={<Intro/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/eventos'} element={<Events/>}/>
            <Route path={'/evento/:id'} element={<Event/>}/>

            </Routes>
        </DisplayBG>
    )
}
