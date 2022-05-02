import {
    ADD_TO_CART, CHANGE_OWNER_DETAILS, PLACE_ORDER_FAILURE, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS, REMOVE_FROM_CART,
} from '../actions/actionTypes'

const initialState = {
    cartItems: [],
    owner: { phone: '', address: '' },
    loading: false,
    error: null,
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
        case CHANGE_OWNER_DETAILS:
            const { name, value } = action.payload;
            return { ...state, owner: { ...state.owner, [name]: value } };
        case PLACE_ORDER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case PLACE_ORDER_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case PLACE_ORDER_SUCCESS:
            return {
                ...initialState
            };
        default:
            return state;
    }
}