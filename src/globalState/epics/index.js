import { ajax }                                                                from 'rxjs/ajax';
import { map, switchMap, catchError, debounceTime, filter }                    from 'rxjs/operators';
import { of }                                                                  from 'rxjs';
import { placeOrderFailure, placeOrderRequest, placeOrderSuccess }             from '../reducers/cartReducer';
import {
    changeSearchField,
    loadCatalogFailure,
    loadCatalogRequest,
    loadCatalogSuccess
}                                                                              from '../reducers/loadCatalogReducer';
import { loadCategoriesFailure, loadCategoriesRequest, loadCategoriesSuccess } from '../reducers/loadCategoriesReducer';
import { loadProductFailure, loadProductRequest, loadProductSuccess }          from '../reducers/loadProductReducer';
import { loadTopSalesFailure, loadTopSalesRequest, loadTopSalesSuccess }       from '../reducers/loadTopSalesReducer';

export const loadTopSalesEpic = action$ => action$.pipe(
    filter(loadTopSalesRequest.match),
    switchMap(() => ajax.getJSON(`${process.env.REACT_APP_LOAD_TOP_SALES_URL}`).pipe(
        map(o => loadTopSalesSuccess(o)),
        catchError(e => of(loadTopSalesFailure(e))),
    )),
);

export const loadCategoriesEpic = action$ => action$.pipe(
    filter(loadCategoriesRequest.match),
    switchMap(() => ajax.getJSON(`${process.env.REACT_APP_LOAD_CATEGORIES_URL}`).pipe(
        map(o => loadCategoriesSuccess(o)),
        catchError(e => of(loadCategoriesFailure(e))),
    )),
);

export const changeSearchEpic = action$ => action$.pipe(
    filter(changeSearchField.match),
    map(o => o.payload.trim()),
    filter(o => o !== ''),
    debounceTime(1000),
    map(o => loadCatalogRequest(o))
)

export const loadCatalogEpic = (action$, state$) => action$.pipe(
    filter(loadCatalogRequest.match),
    map(() => new URLSearchParams({
                                      categoryId: state$.value.catalog.selectedCategory ?? 0,
                                      offset: state$.value.catalog.offset ?? 0,
                                      q: state$.value.catalog.search ?? '',
                                  })),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_LOAD_CATALOG_URL}?${o}`).pipe(
        debounceTime(1000),
        map(o => loadCatalogSuccess(o)),
        catchError(e => of(loadCatalogFailure(e))),
    )),
);

export const loadProductEpic = action$ => action$.pipe(
    filter(loadProductRequest.match),
    map(o => o.payload),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_LOAD_CATALOG_URL}/${o}`).pipe(
        map(o => loadProductSuccess(o)),
        catchError(e => of(loadProductFailure(e))),
    )),
);

export const placeOrderEpic = (action$, state$) => action$.pipe(
    filter(placeOrderRequest.match),
    switchMap(() => ajax.post(
        `${process.env.REACT_APP_PLACE_ORDER_URL}`,
        {
            owner: state$.value.cart.owner,
            items: state$.value.cart.cartItems.map(item => {
                return {
                    id: +item.id,
                    price: item.product.price,
                    count: item.count
                }
            }),
        },
        { 'Content-type': 'application/json; charset=UTF-8' }).pipe(
        map(o => placeOrderSuccess(o)),
        catchError(e => of(placeOrderFailure(e))),
    )),
);