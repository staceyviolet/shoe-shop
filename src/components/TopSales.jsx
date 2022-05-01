import { useEffect, useState }                     from 'react';
import { useDispatch, useSelector }                from 'react-redux';
import { loadCatalogRequest, loadTopSalesRequest } from '../globalState/actions/actionCreators';
import { loadTopSalesEpic }                        from '../globalState/epics';
import { ProductCard }                             from './ProductCard';

export function TopSales() {
    const { topSales, loading, error } = useSelector(state => state.topSales);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTopSalesRequest());

    }, [])

    return (!topSales.length ? null
                             :
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>

                {loading ? <div className="preloader">
                             <span></span>
                             <span></span>
                             <span></span>
                             <span></span>
                         </div>
                         : <div className="row">
                     {topSales.map(item => <ProductCard key={item.id} product={item}/>)}
                 </div>}

                {error && <p>Упс! Что-то пошло не так</p>}
            </section>
    )
}

