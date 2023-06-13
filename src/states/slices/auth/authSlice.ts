import { createSlice } from "@reduxjs/toolkit";

// const initialState = ['']

export const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null },
    reducers: {
        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action: unknown) => {
            state.user = null
            state.token = null
        },
    },
})

export const { setCredentials, logOut } = authSlice.actions

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentToken = (state: any) => state.auth.token