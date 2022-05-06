import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopSalesRequest }      from '../../globalState/reducers/loadTopSalesReducer';
import { ProductCard }              from '../ProductCard';

export function TopSales() {
    const { topSales, loading, error } = useSelector(state => state.topSales);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTopSalesRequest());
    }, [dispatch])

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            {!error ?
             (!loading ?
              <div className="row">
                  {topSales.map(item => <ProductCard key={item.id} product={item}/>)}
              </div>
                       :
              <div className="preloader">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
             ) : <p>Упс! Что-то пошло не так</p>}
        </section>
    )
}

