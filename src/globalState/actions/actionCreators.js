import {
    CHANGE_SEARCH_FIELD,
    LOAD_CATALOG_REQUEST,
    LOAD_CATALOG_FAILURE,
    LOAD_CATALOG_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    LOAD_CATEGORIES_FAILURE,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_REQUEST,
} from './actionTypes';
export const loadCategoriesRequest = () => ({
    type: LOAD_CATEGORIES_REQUEST,
    payload: {},
});

export const loadCategoriesFailure = error => ({
    type: LOAD_CATEGORIES_FAILURE,
    payload: {error},
});

export const loadCategoriesSuccess = categories => ({
    type: LOAD_CATEGORIES_SUCCESS,
    payload: {categories},
});

export const loadCatalogRequest = (category, offset, search) => ({
    type: LOAD_CATALOG_REQUEST,
    payload: {category, offset, search},
});

export const loadCatalogFailure = error => ({
    type: LOAD_CATALOG_FAILURE,
    payload: {error},
});

export const loadCatalogSuccess = catalogItems => ({
    type: LOAD_CATALOG_SUCCESS,
    payload: {catalogItems},
});

export const changeSearchField = (category, offset, search) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: {category, offset, search},
});

export const addToCart = (cartItem) => ({
    type: ADD_TO_CART,
    payload: {cartItem},
});

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: {itemId},
});