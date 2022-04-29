import {
    CHANGE_SEARCH_FIELD,
    LOAD_CATALOG_REQUEST,
    LOAD_CATALOG_FAILURE,
    LOAD_CATALOG_SUCCESS, ADD_TO_CART, REMOVE_FROM_CART,
} from './actionTypes';


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