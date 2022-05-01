import {
    LOAD_TOP_SALES_REQUEST, LOAD_TOP_SALES_FAILURE, LOAD_TOP_SALES_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    topSales: [],
    loading: false,
    error: null,
};

export default function loadTopSalesReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_TOP_SALES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOAD_TOP_SALES_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case LOAD_TOP_SALES_SUCCESS:
            const { topSales } = action.payload;
            return {
                ...state,
                topSales,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}