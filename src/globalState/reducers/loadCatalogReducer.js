import {
    LOAD_CATALOG_REQUEST,
    LOAD_CATALOG_FAILURE,
    LOAD_CATALOG_SUCCESS,
    CHANGE_SEARCH_FIELD,
} from '../actions/actionTypes'

const initialState = {
    catalogItems: [],
    loading: false,
    error: null,
    search: '',
};

export default function loadCatalogReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CATALOG_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOAD_CATALOG_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case LOAD_CATALOG_SUCCESS:
            const { catalogItems } = action.payload;
            return {
                ...state,
                catalogItems,
                loading: false,
                error: null,
            };
        case CHANGE_SEARCH_FIELD:
            const { category, offset, search } = action.payload;
            return {
                ...state,
                search
            };
        default:
            return state;
    }
}