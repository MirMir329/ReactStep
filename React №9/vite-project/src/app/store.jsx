import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/UserSlice.jsx";

export const store =
configureStore({
    reducer: {
        users: usersReducer
    }
})
