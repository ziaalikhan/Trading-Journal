import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    user_id: null,
    is_dark_mode: false
}

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
            state.user_id = action.payload?.data?.user_id;
        },
        logout: (state) => {
            state.user = {};
        },
        darkModeHandler: (state, action) => {
            state.is_dark_mode = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { loginUser, logout, darkModeHandler } = userSlice.actions;

export default userSlice.reducer;