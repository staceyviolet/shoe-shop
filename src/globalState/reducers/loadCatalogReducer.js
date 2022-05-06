import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    catalogItems: [],
    loading: false,
    error: null,
    selectedCategory: 0,
    offset: 0,
    search: '',
    showMoreButtonVisible: false
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
                                                          const showMoreButtonVisible = catalogItems.length === 6

                                                          const newCatalogItems = state.offset !== 0 ? [...state.catalogItems, ...catalogItems] : catalogItems
                                                          return state = {
                                                              ...state,
                                                              catalogItems: newCatalogItems,
                                                              showMoreButtonVisible,
                                                              loading: false,
                                                              error: null,
                                                          };
                                                      },
                                                      changeSearchField(state, action) {
                                                          const search = action.payload;
                                                          return state = { ...state, search }
                                                      },
                                                      changeSelectedCategory(state, action) {
                                                          const selectedCategory = action.payload;
                                                          return state = { ...state, selectedCategory }
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
