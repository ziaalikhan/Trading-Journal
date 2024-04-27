import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Reducers/UserReducer';
import getAllPortfolioSlice from './Reducers/portfolioReducer';

export const store = configureStore({
    reducer: {
        User: userSlice,
        portfolio: getAllPortfolioSlice,
  
    },
})