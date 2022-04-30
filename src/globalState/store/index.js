import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware }                      from 'redux-observable';
import cartReducer                                                 from '../reducers/cartReducer';
import loadCatalogReducer                                        from '../reducers/loadCatalogReducer';
import { changeSearchEpic, loadCatalogEpic, loadCategoriesEpic } from '../epics';
import loadCategoriesReducer                                     from '../reducers/loadCategoriesReducer';

const reducer = combineReducers({
                                    categories: loadCategoriesReducer,
                                    catalog: loadCatalogReducer,
                                    cart: cartReducer
                                });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    changeSearchEpic,
    loadCatalogEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;