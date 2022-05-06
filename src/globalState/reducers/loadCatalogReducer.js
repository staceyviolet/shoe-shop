import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    catalogItems: [],
    loading: false,
    error: null,
    category: 0,
    offset: 0,
    search: '',
};

export const loadCatalogReducer = createSlice({
                                                  name: 'loadCatalogReducer',
                                                  initialState: initialState,
                                                  reducers: {
                                                      loadCatalogRequest(state) {
                                                          return state = {
                                                              ...state,
                                                              loading: true,
                                                              error: null,
                                                          };
                                                      },
                                                      loadCatalogFailure(state, action) {
                                                          const error = action.payload;
                                                          return state = {
                                                              ...state,
                                                              loading: false,
                                                              error,
                                                          };
                                                      },
                                                      loadCatalogSuccess(state, action) {
                                                          const catalogItems = action.payload;
                                                          const newCatalogItems = state.offset !== 0 ? [...state.catalogItems, ...catalogItems] : catalogItems
                                                          return state = {
                                                              ...state,
                                                              catalogItems: newCatalogItems,
                                                              loading: false,
                                                              error: null,
                                                          };
                                                      },
                                                      changeSearchField(state, action) {
                                                          const search = action.payload;
                                                          return state = { ...state, search }
                                                      },
                                                      changeSelectedCategory(state, action) {
                                                          const category = action.payload;
                                                          return state = { ...state, category }
                                                      },
                                                      changeOffset(state, action) {
                                                          const offset = action.payload;
                                                          return state = { ...state, offset }
                                                      },
                                                  }
                                              })

export const {
    loadCatalogRequest,
    loadCatalogFailure,
    loadCatalogSuccess,
    changeSearchField,
    changeSelectedCategory,
    changeOffset
} = loadCatalogReducer.actions
