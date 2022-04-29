import {
    ADD_TO_CART, REMOVE_FROM_CART,
} from '../actions/actionTypes'

const initialState = {
    cartItems: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const { cartItem } = action.payload;
            return { ...state, cartItems: [...state.cartItems, cartItem] }
        case REMOVE_FROM_CART:
            const { itemId } = action.payload;
            const newCartItems = state.cartItems.filter(item => item.id !== itemId)
            return { ...state, cartItems: newCartItems };
        default:
            return state;
    }
}