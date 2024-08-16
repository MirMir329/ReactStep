import React from 'react'

export default function Child({message, str}) {

    // const message = props.message
    // const str = props.str

    const randNum = Math.floor(Math.random() * 10)
    return (
        <div>
            <h1>Всем привет</h1>
            <h3>Сообщение от App.jsx - {message} </h3>
            <h3>Строка от App.jsx - {str}</h3>
            <h4>Random num = {randNum}</h4>
        </div>
    )
}
