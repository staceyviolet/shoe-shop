import {
    LOAD_PRODUCT_REQUEST,
    LOAD_PRODUCT_FAILURE,
    LOAD_PRODUCT_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    id: null,
    loading: false,
    error: null,
};

export default function loadProductReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOAD_PRODUCT_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case LOAD_PRODUCT_SUCCESS:
            const { id } = action.payload;
            return {
                ...state,
                id,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}