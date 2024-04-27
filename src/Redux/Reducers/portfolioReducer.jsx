import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config/config";

// search


export const getAllPortfolio = createAsyncThunk("portfolio/getAllPortfolio",
    async (user_id, { rejectWithValue }) => {
        try {
            let response = await axios({
                method: "get",
                url: `${BASE_URL}/portfolio/fetch/${user_id}`,
                // headers: {
                //     Accept: "application/json",
                //     "Content-Type": "application/json",
                //     Authorization: `Bearer ${user?.token}`,
                // },
            })
            let data = await response.data;
            return data;
        } catch (error) {
            // return rejectWithValue(error?.response?.data?.msg);
        }

    }
);


const getAllPortfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        loading: false,
        portfolio_list: []
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPortfolio.fulfilled, (state, action) => {
            state.portfolio_list = action.payload?.data;
            state.loading = false;
        });
        builder.addCase(getAllPortfolio.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getAllPortfolio.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false;
        })
    },
});

// Action creators are generated for each case reducer function

export default getAllPortfolioSlice.reducer;