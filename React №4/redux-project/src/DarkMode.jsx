import React from 'react'
import { useDispatch, useSelector } from "react-redux"

const DarkMode = () => {

    const dispatch = useDispatch()
    const isDark = useSelector(state => state.darkModeReducer.isDark)

    const change = () => {
        dispatch({type: "CHANGE_MODE", payload: null})
    }

    return <button onClick={change}>Смена фона</button>

}

export default DarkMode