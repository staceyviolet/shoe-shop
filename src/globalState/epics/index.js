import { ofType }                                                     from 'redux-observable';
import { ajax }                                                       from 'rxjs/ajax';
import { map, retry, filter, debounceTime, switchMap, catchError }    from 'rxjs/operators';
import { CHANGE_SEARCH_FIELD, LOAD_CATALOG_REQUEST }                  from '../actions/actionTypes';
import { loadCatalogRequest, loadCatalogSuccess, loadCatalogFailure } from '../actions/actionCreators';
import { of }                                                         from 'rxjs';

export const changeSearchEpic = action$ => action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    map(o => o.payload),
    map(o => {return { category: o.category, offset: o.offset, search: o.search.trim() }}),
    filter(o => o.search !== ''),
    debounceTime(100),
    map(o => loadCatalogRequest(o.category, o.offset, o.search))
)

export const loadCatalogEpic = action$ => action$.pipe(
    ofType(LOAD_CATALOG_REQUEST),
    map(o => o.payload),
    map(o => new URLSearchParams({ categoryId: o.category, offset: o.offset, q: o.search })),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_LOAD_CATALOG_URL}?${o}`).pipe(
        retry(3),
        map(o => loadCatalogSuccess(o)),
        catchError(e => of(loadCatalogFailure(e))),
    )),
);