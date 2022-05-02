import {
    LOAD_CATALOG_REQUEST,
    LOAD_CATALOG_FAILURE,
    LOAD_CATALOG_SUCCESS,
    CHANGE_SEARCH_FIELD,
    CHANGE_SELECTED_CATEGORY,
    CHANGE_OFFSET,
} from '../actions/actionTypes'

const initialState = {
    catalogItems: [],
    loading: false,
    error: null,
    category: 0,
    offset: 0,
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
            const newCatalogItems = state.offset !== 0 ? [...state.catalogItems, ...catalogItems] : catalogItems

            return {
                ...state,
                catalogItems: newCatalogItems,
                loading: false,
                error: null,
            };
        case CHANGE_SEARCH_FIELD:
            const { search } = action.payload;
            return {
                ...state,
                search
            };
        case CHANGE_SELECTED_CATEGORY:
            const { category } = action.payload;
            return {
                ...state,
                category
            };
        case CHANGE_OFFSET:
            const { offset } = action.payload;
            return {
                ...state,
                offset
            };
        default:
            return state;
    }
}