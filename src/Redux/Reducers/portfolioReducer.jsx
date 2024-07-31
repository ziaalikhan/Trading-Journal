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

export const createPortfolio = createAsyncThunk("portfolio/createPortfolio",
    async (data, { rejectWithValue }) => {
        try {
            let response = await axios({
                method: "post",
                url: `${BASE_URL}/portfolio/create`,
                data: data
                // headers: {
                //     Accept: "application/json",
                //     "Content-Type": "application/json",
                //     Authorization: `Bearer ${user?.token}`,
                // },
            })
            let res = await response.data;
            return res;
        } catch (error) {
            // return rejectWithValue(error?.response?.data?.msg);
        }

    }
);


export const deletePortfolio = createAsyncThunk("portfolio/deletePortfolio",
    async (id, { rejectWithValue }) => {
        try {
            let response = await axios({
                method: "delete",
                url: `${BASE_URL}/portfolio/delete/${id}`,
                // data: data
                // headers: {
                //     Accept: "application/json",
                //     "Content-Type": "application/json",
                //     Authorization: `Bearer ${user?.token}`,
                // },
            })
            let res = await response.data;
            return res;
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
        // GET ALL
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
        
        // CREATE
        builder.addCase(createPortfolio.fulfilled, (state, action) => {
            // state.portfolio_list = action.payload?.data;
            state.loading = false;
        });
        builder.addCase(createPortfolio.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(createPortfolio.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false;
        })
        
        // DELETE
        builder.addCase(deletePortfolio.fulfilled, (state, action) => {
            // state.portfolio_list = action.payload?.data;
            state.loading = false;
        });
        builder.addCase(deletePortfolio.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(deletePortfolio.rejected, (state, action) => {
            state.error = action.error.message
            state.loading = false;
        })
    },
});

// Action creators are generated for each case reducer function

export default getAllPortfolioSlice.reducer;