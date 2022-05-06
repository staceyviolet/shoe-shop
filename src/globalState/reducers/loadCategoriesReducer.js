import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

export const loadCategoriesReducer = createSlice({
                                                     name: 'loadCategoriesReducer',
                                                     initialState: initialState,
                                                     reducers: {
                                                         loadCategoriesRequest(state) {
                                                             return state = {
                                                                 ...state,
                                                                 loading: true,
                                                                 error: null,
                                                             };
                                                         },
                                                         loadCategoriesFailure(state, action) {
                                                             const error = action.payload;
                                                             return state = {
                                                                 ...state,
                                                                 loading: false,
                                                                 error,
                                                             };
                                                         },
                                                         loadCategoriesSuccess(state, action) {
                                                             const categories = action.payload;
                                                             return state = {
                                                                 ...state,
                                                                 categories,
                                                                 loading: false,
                                                                 error: null,
                                                             };
                                                         },
                                                     }
                                                 })

export const {
    loadCategoriesRequest,
    loadCategoriesFailure,
    loadCategoriesSuccess,
} = loadCategoriesReducer.actions
