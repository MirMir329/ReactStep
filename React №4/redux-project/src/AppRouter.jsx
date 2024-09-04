import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import "./App.module.css"
import PostsPage from "./Pages/PostsPage.jsx"
import MainPage from "./Pages/MainPage.jsx"
import PostPage from "./Pages/PostPage.jsx"
import {useContext} from "react"
import {privateRoutes, publicRoutes} from './router'
import {AuthContext} from "./context/context.js"

export default function AppRouter() {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.element/>} exact={route.exact}/>
            ))}
            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.element/>} exact={route.exact}/>
            ))}
            <Route path="*" element={<Navigate to="/login"/>} />
        </Routes>
    )
    
}
