import { useEffect }                from 'react';
import { ProductCard }              from '../components/ProductCard';
import { Categories }               from '../components/Categories';
import { Row }                      from '../layout/Row';
import {
    changeOffset,
    changeSearchField,
    changeSelectedCategory,
    loadCatalogRequest
}                                   from '../globalState/actions/actionCreators';
import { useDispatch, useSelector } from 'react-redux';

export function Catalog({ isPage }) {
    const { catalogItems, loading, error, search, offset, category } = useSelector(state => state.catalog);

    const dispatch = useDispatch();

    const handleChangeSearchField = (e) => {
        e.preventDefault()
        dispatch(changeSearchField(e.target.value))
        dispatch(loadCatalogRequest())
    }

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
    }, [category, offset, dispatch])

    const showMoreButton = !!catalogItems.length && catalogItems.length > 5

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {isPage &&
                <form className="catalog-search-form form-inline">
                    <input className="form-control" placeholder="Поиск" value={search}
                           onChange={handleChangeSearchField}/>
                </form>
            }

            {!error ? (loading ?
                       <div className="preloader">
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                       </div>
                               :
                       <>
                           <Categories/>

                           <Row>{catalogItems.map(item => <ProductCard key={item.id} product={item} isCatalog/>)}</Row>

                           {showMoreButton &&
                               <div className="text-center">
                                   <button className="btn btn-outline-primary"
                                           onClick={handleShowMoreClick}>
                                       Загрузить ещё
                                   </button>
                               </div>
                           }
                       </>
            ) : <p>Упс! Что-то пошло не так</p>}
        </section>
    )
}

