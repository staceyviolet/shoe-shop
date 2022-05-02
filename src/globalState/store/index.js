import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware }                      from 'redux-observable';
import cartReducer                                                 from '../reducers/cartReducer';
import loadCatalogReducer                                          from '../reducers/loadCatalogReducer';
import loadCategoriesReducer                                       from '../reducers/loadCategoriesReducer';
import loadProductReducer                                          from '../reducers/loadProductReducer';
import loadTopSalesReducer                                         from '../reducers/loadTopSalesReducer';
import {
    changeSearchEpic,
    loadCatalogEpic,
    loadCategoriesEpic,
    loadProductEpic,
    loadTopSalesEpic,
    placeOrderEpic
}                                                                  from '../epics';

const reducer = combineReducers({
                                    topSales: loadTopSalesReducer,
                                    categories: loadCategoriesReducer,
                                    catalog: loadCatalogReducer,
                                    cart: cartReducer,
                                    product: loadProductReducer
                                });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    changeSearchEpic,
    loadCatalogEpic,
    loadCategoriesEpic,
    loadTopSalesEpic,
    loadProductEpic,
    placeOrderEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;