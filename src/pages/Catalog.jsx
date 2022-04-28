import {useEffect, useState} from "react";
import {ProductCard} from "../components/ProductCard";
import {Categories} from "../components/Categories";
import {Row} from "../layout/Row";

export function Catalog({isPage, searchInput}) {
    const [catalog, setCatalog] = useState([])
    const [loading, setLoading] = useState(false)

    const [categoryId, setCategoryId] = useState(0)
    const [offset, setOffset] = useState(6)


    useEffect(() => {
        const loadCatalog = async () => {
            setLoading(true)
            try {
                await fetch(`http://localhost:7070/api/items?offset=${offset}${categoryId > 0 ? `&categoryId=${categoryId}` : ""}${searchInput ? `&q=${searchInput}` : ""}`)
                    .then(response => response.json())
                    .then(response => setCatalog(response))
            } catch (e) {

            } finally {
                setLoading(false)
            }

        }
        loadCatalog()

    }, [categoryId, offset])

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

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {loading && <div className="preloader"/>}

            {isPage &&
                <form className="catalog-search-form form-inline">
                    <input className="form-control" placeholder="Поиск" value={searchInput}/>
                </form>}

            {!loading && <Categories categories={categories}
                                     categoryId={categoryId}
                                     setCategoryId={setCategoryId}/>}

            {!loading && <Row>{catalog.map(item => <ProductCard key={item.id} product={item} isCatalog/>)}</Row>}

            <div className="text-center">
                <button className="btn btn-outline-primary"
                        onClick={() => setOffset(prevState => prevState + 6)}>Загрузить ещё
                </button>
            </div>
        </section>

    )
}

