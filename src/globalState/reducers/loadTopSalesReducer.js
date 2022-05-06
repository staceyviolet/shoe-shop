import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topSales: [],
    loading: false,
    error: null,
};

export const loadTopSalesReducer = createSlice({
                                                   name: 'loadTopSalesReducer',
                                                   initialState: initialState,
                                                   reducers: {
                                                       loadTopSalesRequest(state) {
                                                           return state = { ...state, loading: true }
                                                       },
                                                       loadTopSalesFailure(state, action) {
                                                           const error = action.payload;
                                                           return state = { ...state, loading: false, error: error }
                                                       },
                                                       loadTopSalesSuccess(state, action) {
                                                           const topSales = action.payload
                                                           return state = {
                                                               ...state,
                                                               topSales: topSales,
                                                               loading: false,
                                                               error: null
                                                           }

                                                       },
                                                   }
                                               })

export const {
    loadTopSalesRequest,
    loadTopSalesFailure,
    loadTopSalesSuccess,
} = loadTopSalesReducer.actions