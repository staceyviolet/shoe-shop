import {
    ADD_TO_CART,
    CHANGE_OWNER_DETAILS,
    PLACE_ORDER_FAILURE,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    REMOVE_FROM_CART,
} from '../actions/actionTypes'

const cart = JSON.parse(window.localStorage.getItem('cart'))

const initialState = {
    cartItems: cart ? cart : [],
    owner: { phone: '', address: '' },
    loading: false,
    error: null,
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const { cartItem } = action.payload;
            const cartItemAlreadyExists = !!state.cartItems.filter(item => item.id === cartItem.id).length

            const newCartItems = cartItemAlreadyExists ?
                                 state.cartItems.map(item => {
                                     if (item.id === cartItem.id) {
                                         return { ...item, count: item.count + cartItem.count }
                                     } else {return item}
                                 })
                                                       : [...state.cartItems, cartItem]

            window.localStorage.setItem('cart', JSON.stringify(newCartItems));

            return { ...state, cartItems: newCartItems }
        case REMOVE_FROM_CART:
            const { itemId } = action.payload;
            const cartItemsAfterRemove = state.cartItems.filter(item => item.id !== itemId)

            window.localStorage.setItem('cart', JSON.stringify(cartItemsAfterRemove));

            return { ...state, cartItems: cartItemsAfterRemove };
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
            window.localStorage.removeItem('cart')
            return {
                ...initialState, cartItems: []
            };
        default:
            return state;
    }
}