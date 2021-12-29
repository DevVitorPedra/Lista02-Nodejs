import React from 'react'
import Login from '../Login/Login'
import Events from '../Events/Events'
import { Routes, Route } from 'react-router-dom'
import { DisplayBG } from './Styled'

export default function Display() {
    return (
        <DisplayBG>
            <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/eventos'} element={<Events/>}/>

            </Routes>
        </DisplayBG>
    )
}
