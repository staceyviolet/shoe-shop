import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools }                              from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import {
    changeSearchEpic,
    loadCatalogEpic,
    loadCategoriesEpic,
    loadProductEpic,
    loadTopSalesEpic,
    placeOrderEpic
}                                             from '../epics';
import { cartReducer }                        from '../reducers/cartReducer';
import { loadCatalogReducer }    from '../reducers/loadCatalogReducer';
import { loadCategoriesReducer } from '../reducers/loadCategoriesReducer';
import { loadProductReducer }    from '../reducers/loadProductReducer';
import { loadTopSalesReducer }   from '../reducers/loadTopSalesReducer';

const epic = combineEpics(
    changeSearchEpic,
    loadCatalogEpic,
    loadCategoriesEpic,
    loadTopSalesEpic,
    loadProductEpic,
    placeOrderEpic,
);

const epicMiddleware = createEpicMiddleware();
const middlewareEnhancer = applyMiddleware(epicMiddleware)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

export const store = configureStore({
                                        reducer: {
                                            topSales: loadTopSalesReducer.reducer,
                                            categories: loadCategoriesReducer.reducer,
                                            catalog: loadCatalogReducer.reducer,
                                            cart: cartReducer.reducer,
                                            product: loadProductReducer.reducer
                                        },
                                        // middleware: [epicMiddleware],
                                        enhancers: [composedEnhancers],
                                    });
epicMiddleware.run(epic);

export default store;