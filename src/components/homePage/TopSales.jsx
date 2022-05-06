import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopSalesRequest }      from '../../globalState/reducers/loadTopSalesReducer';
import { Loader }                   from '../Loader';
import { ProductCard }              from '../ProductCard';

export function TopSales() {
    const { topSales, loading, error } = useSelector(state => state.topSales);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTopSalesRequest());
    }, [dispatch])

    if (error) {
        return <p>Упс! Что-то пошло не так</p>
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <div className="row">
            {topSales.map(item => <ProductCard key={item.id} product={item}/>)}
        </div>
    )
}

