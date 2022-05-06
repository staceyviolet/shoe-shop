import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product: {
        id: 0,
        category: 0,
        title: '',
        images: [],
        sku: '',
        manufacturer: '',
        color: '',
        material: '',
        reason: '',
        season: '',
        heelSize: '',
        price: 0,
        sizes: [
            {
                'avalible': false,
                'size': ''
            }
        ]
    },
    loading: false,
    error: null,
};

export const loadProductReducer = createSlice({
                                                  name: 'loadProductReducer',
                                                  initialState: initialState,
                                                  reducers: {
                                                      loadProductRequest(state) {
                                                          return state = {
                                                              ...state,
                                                              loading: true,
                                                              error: null,
                                                          };
                                                      },
                                                      loadProductFailure(state, action) {
                                                          const  error  = action.payload;
                                                          return state = {
                                                              ...state,
                                                              loading: false,
                                                              error,
                                                          };
                                                      },
                                                      loadProductSuccess(state, action) {
                                                          const  product  = action.payload;
                                                          return state = {
                                                              ...state,
                                                              product,
                                                              loading: false,
                                                              error: null,
                                                          };
                                                      },
                                                  }
                                              })

export const {
    loadProductRequest,
    loadProductFailure,
    loadProductSuccess,
} = loadProductReducer.actions