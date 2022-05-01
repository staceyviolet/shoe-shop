import { useEffect, useState }                   from 'react';
import { ProductCard }                           from '../components/ProductCard';
import { Categories }                            from '../components/Categories';
import { Row }                                   from '../layout/Row';
import { changeSearchField, loadCatalogRequest } from '../globalState/actions/actionCreators';
import { useDispatch, useSelector }              from 'react-redux';

export function Catalog({ isPage, searchInput }) {
    const [categoryId, setCategoryId] = useState(0)

    const handleSetCategoryId = (id) => {
        setCategoryId(id)
        setOffset(0)
    }

    const [offset, setOffset] = useState(0)

    const [showMoreButton, setShowMoreButton] = useState(true)

    const { catalogItems, loading, error, search } = useSelector(state => state.catalog);

    const dispatch = useDispatch();

    const [searchField, setSearchField] = useState(isPage ? searchInput : '')

    const handleSearch = () => {
        dispatch(changeSearchField(categoryId, offset, searchField));
    };

    useEffect(handleSearch, [searchField])

    useEffect(() => {
        dispatch(loadCatalogRequest(categoryId, offset, search));
    }, [categoryId, offset])

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {loading && <div className="preloader"/>}

            {isPage && <form className="catalog-search-form form-inline">
                <input className="form-control" placeholder="Поиск" value={searchField}
                       onChange={(e) => setSearchField(e.target.value)}/>
            </form>}

            {!loading && <Categories categoryId={categoryId}
                                     setCategoryId={handleSetCategoryId}/>}

            {!loading && <Row>{catalogItems.map(item => <ProductCard key={item.id} product={item} isCatalog/>)}</Row>}

            {!loading && showMoreButton && <div className="text-center">
                <button className="btn btn-outline-primary"
                        onClick={() => setOffset(prevState => prevState + 6)}
                >
                    Загрузить ещё
                </button>
            </div>}
        </section>
    )
}

