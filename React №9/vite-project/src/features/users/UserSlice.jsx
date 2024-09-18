import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("", 
    async () => {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        console.log(data);
        return data.users;
    }
)

export const fetchAddUsers = createAsyncThunk("asdasd", 
    async () => {
        const response = await fetch('https://dummyjson.com/users/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: 'Muhammad',
            lastName: 'Ovi',
            age: 250,
          })
        });
        const data = await response.json();
        console.log(data);
        return data;
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        sortPosts: (state, action) => {
            state.users = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, 
            (state) => {
                state.loading = true;
                state.error = null;

            }
        ).addCase(fetchUsers.fulfilled, 
            (state, action) => {
                state.loading = false;
                state.users = action.payload;
            }
        ).addCase(fetchUsers.rejected, 
            (state, action) => {
                state.loading = false;
                state.users = action.error.message;
            }
        ).addCase(fetchAddUsers.pending, 
            (state) => {
                state.loading = true;
                state.error = null;

            }
        ).addCase(fetchAddUsers.fulfilled, 
            (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.users = [...state.users, action.payload];
            }
        ).addCase(fetchAddUsers.rejected, 
            (state, action) => {
                state.loading = false;
                state.users = action.error.message;
            }
        )
    } 
})

export const { addUser, sortPosts } = usersSlice.actions

export default usersSlice.reducer