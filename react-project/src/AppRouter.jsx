import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import "./App.module.css"
import PostsPage from "./Pages/PostsPage.jsx"
import MainPage from "./Pages/MainPage.jsx"
import PostPage from "./Pages/PostPage.jsx"
import routes from './router'

export default function AppRouter() {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.element/>} exact={route.exact}/>
            ))}
            {/* <Route path="/posts" element={<PostsPage />}/>
            <Route path="/posts/:postId" element={<PostPage />}/>
            <Route path="/" element={<MainPage />}/>
            <Route path="*" element={<Navigate to="/" />}/> */}
        </Routes>
    )
}
