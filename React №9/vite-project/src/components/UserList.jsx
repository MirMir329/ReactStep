import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux"

import { fetchUsers } from "../features/users/UserSlice.jsx"

const UsersList = () => {
    const dispatch = useDispatch()
    const {users, loading, error} = useSelector(state => state.users)
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])



    // const useSortedPosts = (postArr, sort) => {
    //     return useMemo(() => {
    //         if (sort) {
    //             users = ([...users].sort((a, b) => a[sort].localeCompare(b[sort])))
    //         }
    //         return postArr
    //     }, [sort, users])
    // } 

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error {error}</p>

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>FirstName:{user.firstName}, Age: {user.age}</li>
            ))}
        </ul>
    )
}

export default UsersList