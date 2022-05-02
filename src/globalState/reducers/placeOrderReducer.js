import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_FAILURE,
    PLACE_ORDER_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    loading: false,
    error: null,
};

export default function placeOrderReducer(state = initialState, action) {
    switch (action.type) {
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