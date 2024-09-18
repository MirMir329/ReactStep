import React from 'react'
import { useDispatch } from "react-redux"
import { addUser } from "../features/users/UserSlice.jsx"
import { fetchAddUsers } from "../features/users/UserSlice.jsx"

export default function AddUserBtn() {

    const dispatch = useDispatch()

    const handleAddUser = () => {
        dispatch(fetchAddUsers());
    }

    return (
        <button onClick={handleAddUser}>Добавить пользователя</button>
    )
}
