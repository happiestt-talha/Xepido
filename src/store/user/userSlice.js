import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
    isAdmin: false
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
            state.error = null
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.currentUser = action.payload
            state.error = null
        },
        loginFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        logout: (state) => {
            state.currentUser = null
        },
        makeAdmin: (state) => {
            state.isAdmin = true
        }
    },
})

export const { loginStart, loginSuccess, loginFailure, logout, makeAdmin } = userSlice.actions

export default userSlice.reducer