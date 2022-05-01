import {
    LOAD_CATEGORIES_REQUEST,
    LOAD_CATEGORIES_FAILURE,
    LOAD_CATEGORIES_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    categories: [],
    loading: false,
    error: null,
};

export default function loadCategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOAD_CATEGORIES_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case LOAD_CATEGORIES_SUCCESS:
            const { categories } = action.payload;
            return {
                ...state,
                categories,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}