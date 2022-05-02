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
    LOAD_TOP_SALES_REQUEST,
    LOAD_TOP_SALES_FAILURE,
    LOAD_TOP_SALES_SUCCESS,
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_FAILURE,
    PLACE_ORDER_SUCCESS,
    LOAD_PRODUCT_REQUEST,
    LOAD_PRODUCT_FAILURE,
    LOAD_PRODUCT_SUCCESS,
    CHANGE_SELECTED_CATEGORY,
    CHANGE_OFFSET,
    CHANGE_OWNER_DETAILS,
} from './actionTypes';

export const loadCategoriesRequest = () => ({
    type: LOAD_CATEGORIES_REQUEST,
});

export const loadCategoriesFailure = error => ({
    type: LOAD_CATEGORIES_FAILURE,
    payload: { error },
});

export const loadCategoriesSuccess = categories => ({
    type: LOAD_CATEGORIES_SUCCESS,
    payload: { categories },
});

export const loadTopSalesRequest = () => ({
    type: LOAD_TOP_SALES_REQUEST,
});

export const loadTopSalesFailure = error => ({
    type: LOAD_TOP_SALES_FAILURE,
    payload: { error },
});

export const loadTopSalesSuccess = topSales => ({
    type: LOAD_TOP_SALES_SUCCESS,
    payload: { topSales },
});

export const loadCatalogRequest = () => ({
    type: LOAD_CATALOG_REQUEST
});

export const loadCatalogFailure = error => ({
    type: LOAD_CATALOG_FAILURE,
    payload: { error },
});

export const loadCatalogSuccess = (catalogItems) => ({
    type: LOAD_CATALOG_SUCCESS,
    payload: { catalogItems },
});

export const changeSelectedCategory = (category) => ({
    type: CHANGE_SELECTED_CATEGORY,
    payload: { category },
});

export const changeOffset = (offset) => ({
    type: CHANGE_OFFSET,
    payload: { offset },
});

export const changeSearchField = (search) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: { search },
});

export const addToCart = (cartItem) => ({
    type: ADD_TO_CART,
    payload: { cartItem },
});

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: { itemId },
});

export const placeOrderRequest = () => ({
    type: PLACE_ORDER_REQUEST,
});

export const placeOrderFailure = error => ({
    type: PLACE_ORDER_FAILURE,
    payload: { error },
});

export const placeOrderSuccess = () => ({
    type: PLACE_ORDER_SUCCESS,
});

export const loadProductRequest = (itemId) => ({
    type: LOAD_PRODUCT_REQUEST,
    payload: { itemId },
});

export const loadProductFailure = error => ({
    type: LOAD_PRODUCT_FAILURE,
    payload: { error },
});

export const loadProductSuccess = (product) => ({
    type: LOAD_PRODUCT_SUCCESS,
    payload: { product },
});

export const changeOwnerDetails = (name, value) => ({
    type: CHANGE_OWNER_DETAILS,
    payload: { name, value },
});