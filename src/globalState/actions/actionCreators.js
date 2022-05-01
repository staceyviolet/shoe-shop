import {
    CHANGE_SEARCH_FIELD,
    LOAD_CATALOG_REQUEST,
    LOAD_CATALOG_FAILURE,
    LOAD_CATALOG_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    LOAD_CATEGORIES_FAILURE,
    LOAD_CATEGORIES_SUCCESS,
    LOAD_CATEGORIES_REQUEST, LOAD_TOP_SALES_REQUEST, LOAD_TOP_SALES_FAILURE, LOAD_TOP_SALES_SUCCESS,
} from './actionTypes';
export const loadCategoriesRequest = () => ({
    type: LOAD_CATEGORIES_REQUEST,
});

export const loadCategoriesFailure = error => ({
    type: LOAD_CATEGORIES_FAILURE,
    payload: {error},
});

export const loadCategoriesSuccess = categories => ({
    type: LOAD_CATEGORIES_SUCCESS,
    payload: {categories},
});

export const loadTopSalesRequest = () => ({
    type: LOAD_TOP_SALES_REQUEST,
});

export const loadTopSalesFailure = error => ({
    type: LOAD_TOP_SALES_FAILURE,
    payload: {error},
});

export const loadTopSalesSuccess = topSales => ({
    type: LOAD_TOP_SALES_SUCCESS,
    payload: {topSales},
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