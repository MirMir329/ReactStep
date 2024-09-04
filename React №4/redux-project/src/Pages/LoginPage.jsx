import React from 'react'
import MyInput from "../UI/MyInput.jsx"
import {useContext} from "react"
import {AuthContext} from "../context/context.js"

export default function LoginPage() {

    const {setIsAuth} = useContext(AuthContext)

    function login(event) {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true")
    }

    return (
        <div>
            <h1>Страница авторизации</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Логин"/>
                <MyInput type="password" placeholder="Пароль"/>
                <button>Войти</button>
            </form>
        </div>
    )
}
