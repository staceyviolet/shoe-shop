import {
    LOAD_CATEGORIES_REQUEST,
    LOAD_CATEGORIES_FAILURE,
    LOAD_CATEGORIES_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    categories: [],
    categoriesLoading: false,
    categoriesLoadError: null,
};

export default function loadCategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CATEGORIES_REQUEST:
            return {
                ...state,
                categoriesLoading: true,
                categoriesLoadError: null,
            };
        case LOAD_CATEGORIES_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                categoriesLoading: false,
                error,
            };
        case LOAD_CATEGORIES_SUCCESS:
            const { categories } = action.payload;
            return {
                ...state,
                categories,
                categoriesLoading: false,
                categoriesLoadError: null,
            };
        default:
            return state;
    }
}