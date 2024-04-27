import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    user_id: null
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
        }
    },
})

// Action creators are generated for each case reducer function
export const { loginUser, logout } = userSlice.actions;

export default userSlice.reducer;