import { ofType }                     from 'redux-observable';
import { ajax }                       from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import {
    LOAD_CATALOG_REQUEST,
    LOAD_CATEGORIES_REQUEST,
    LOAD_PRODUCT_REQUEST,
    LOAD_TOP_SALES_REQUEST,
    PLACE_ORDER_REQUEST
}                                     from '../actions/actionTypes';
import {
    loadCatalogSuccess,
    loadCatalogFailure,
    loadTopSalesSuccess,
    loadTopSalesFailure,
    loadCategoriesSuccess,
    loadCategoriesFailure,
    loadProductSuccess,
    loadProductFailure,
    placeOrderSuccess,
    placeOrderFailure,
}                                     from '../actions/actionCreators';
import { of }                         from 'rxjs';

export const loadTopSalesEpic = action$ => action$.pipe(
    ofType(LOAD_TOP_SALES_REQUEST),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_LOAD_TOP_SALES_URL}`).pipe(
        map(o => loadTopSalesSuccess(o)),
        catchError(e => of(loadTopSalesFailure(e))),
    )),
);

export const loadCategoriesEpic = action$ => action$.pipe(
    ofType(LOAD_CATEGORIES_REQUEST),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_LOAD_CATEGORIES_URL}`).pipe(
        map(o => loadCategoriesSuccess(o)),
        catchError(e => of(loadCategoriesFailure(e))),
    )),
);

export const loadCatalogEpic = (action$, state$) => action$.pipe(
    ofType(LOAD_CATALOG_REQUEST),
    map(o => new URLSearchParams({
                                     categoryId: state$.value.catalog.category,
                                     offset: state$.value.catalog.offset,
                                     q: state$.value.catalog.search,
                                 })),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_LOAD_CATALOG_URL}?${o}`).pipe(
        map(o => loadCatalogSuccess(o)),
        catchError(e => of(loadCatalogFailure(e))),
    )),
);

export const loadProductEpic = action$ => action$.pipe(
    ofType(LOAD_PRODUCT_REQUEST),
    map(o => o.payload.itemId),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_LOAD_CATALOG_URL}/${o}`).pipe(
        map(o => loadProductSuccess(o)),
        catchError(e => of(loadProductFailure(e))),
    )),
);

export const placeOrderEpic = (action$, state$) => action$.pipe(
    ofType(PLACE_ORDER_REQUEST),
    switchMap(o => ajax.post(
        `${process.env.REACT_APP_PLACE_ORDER_URL}`,
        {
            owner: state$.value.cart.owner,
            items: state$.value.cart.items,
        },
        { 'Content-type': 'application/json; charset=UTF-8' }).pipe(
        map(o => placeOrderSuccess(o)),
        catchError(e => of(placeOrderFailure(e))),
    )),
);