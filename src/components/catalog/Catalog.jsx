import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeOffset,
    changeSelectedCategory,
    loadCatalogRequest
}                                   from '../../globalState/reducers/loadCatalogReducer';
import { Row }                      from '../../layout/Row';
import { Categories }               from '../categories/Categories';
import { Loader }                   from '../Loader';
import { ProductCard }              from '../ProductCard';
import { ShowMoreButton }           from './ShowMoreButton';

export function Catalog() {
    const {
        catalogItems,
        loading,
        error,
        offset,
        selectedCategory,
        showMoreButtonVisible
    } = useSelector(state => state.catalog);

    const dispatch = useDispatch();

    const handleShowMoreClick = (e) => {
        e.preventDefault()
        dispatch(changeOffset(offset + 6));
    };

    useEffect(() => {
        dispatch(changeOffset(0));
        dispatch(changeSelectedCategory(0));
    }, [dispatch])

    useEffect(() => {
        dispatch(loadCatalogRequest());
    }, [selectedCategory, offset, dispatch])

    if (error) {
        return <p>Упс! Что-то пошло не так</p>
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            <ul className="catalog-categories nav justify-content-center">
                <Categories/>
            </ul>

            {!catalogItems.length && <p>По вашему запросу ничего не найдено</p>}

            <Row>
                {catalogItems.map(item => <ProductCard key={item.id} product={item} isCatalog/>)}
            </Row>

            <ShowMoreButton visible={showMoreButtonVisible} onClick={handleShowMoreClick}/>
        </>
    )
}

