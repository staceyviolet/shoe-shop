import { useEffect, useState }                   from 'react';
import { ProductCard }                           from '../components/ProductCard';
import { Categories }                            from '../components/Categories';
import { Row }                                   from '../layout/Row';
import { changeSearchField, loadCatalogRequest } from '../globalState/actions/actionCreators';
import { useDispatch, useSelector }              from 'react-redux';

export function Catalog({ isPage, searchInput }) {
    const [searchField, setSearchField] = useState(searchInput ? searchInput : '')
    const [categoryId, setCategoryId] = useState(0)
    const [offset, setOffset] = useState(0)

    const [showMoreButton, setShowMoreButton] = useState(true)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const loadCategories = async () => {
            try {
                await fetch(`http://localhost:7070/api/categories`)
                    .then(response => response.json())
                    .then(response => setCategories(response))
            } catch (e) {

            } finally {
            }

        }
        loadCategories()

    }, [])

    const handleSetCategoryId = (id) => {
        setCategoryId(id)
        setOffset(0)
    }

    const { catalogItems, loading, error, search } = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(changeSearchField(categoryId, offset, searchField));
    };

    useEffect(() => {handleSearch()}, [searchField])

    const handleLoadCatalog = () => {
        dispatch(loadCatalogRequest(categoryId, offset, ''));
    };

    useEffect(() => {
        handleLoadCatalog()
    }, [categoryId, offset])

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {loading && <div className="preloader"/>}

            {isPage && <form className="catalog-search-form form-inline">
                <input className="form-control" placeholder="Поиск" value={search}
                       onChange={(e) => setSearchField(e.target.value)}/>
            </form>}

            {!loading && <Categories categories={categories}
                                     categoryId={categoryId}
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

