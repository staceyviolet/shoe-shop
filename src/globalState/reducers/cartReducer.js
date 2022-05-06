import { createSlice } from '@reduxjs/toolkit';

const cart = JSON.parse(window.localStorage.getItem('cart'))

const initialState = {
    cartItems: cart ? cart : [],
    owner: { phone: '', address: '' },
    loading: false,
    error: null,
    success: false
};

export const cartReducer = createSlice({
                                           name: 'cartReducer',
                                           initialState: initialState,
                                           reducers: {
                                               addToCart(state, action) {
                                                   const cartItem = action.payload;
                                                   const cartItemAlreadyExists = !!state.cartItems?.filter(item => item.id === cartItem.id).length

                                                   const newCartItems = cartItemAlreadyExists ?
                                                                        state.cartItems.map(item => {
                                                                            if (item.id === cartItem.id && item.size === cartItem.size) {
                                                                                return {
                                                                                    ...item,
                                                                                    count: item.count + cartItem.count
                                                                                }
                                                                            } else {return item}
                                                                        })
                                                                                              : [...state.cartItems, cartItem]
                                                   window.localStorage.setItem('cart', JSON.stringify(newCartItems));

                                                   return state = { ...state, cartItems: newCartItems }
                                               },
                                               removeFromCart(state, action) {
                                                   const itemId = action.payload;
                                                   const cartItemsAfterRemove = state.cartItems.filter(item => item.id !== itemId)

                                                   window.localStorage.setItem('cart', JSON.stringify(cartItemsAfterRemove));

                                                   return state = { ...state, cartItems: cartItemsAfterRemove };
                                               },
                                               changeOwnerDetails(state, action) {
                                                   const fieldAndValue = action.payload;

                                                   return state = {
                                                       ...state,
                                                       owner: { ...state.owner, ...fieldAndValue }
                                                   };
                                               },
                                               placeOrderRequest(state) {
                                                   return state = {
                                                       ...state,
                                                       loading: true,
                                                       error: null,
                                                   };
                                               },
                                               placeOrderFailure(state, action) {
                                                   const error = action.payload;
                                                   return state = {
                                                       ...state,
                                                       loading: false,
                                                       error,
                                                   };
                                               },
                                               placeOrderSuccess(state) {
                                                   window.localStorage.removeItem('cart')
                                                   return state = {
                                                       ...initialState, cartItems: [], success: true
                                                   };
                                               }
                                           }
                                       })

export const {
    addToCart,
    removeFromCart,
    changeOwnerDetails,
    placeOrderRequest,
    placeOrderFailure,
    placeOrderSuccess
} = cartReducer.actions