import {useEffect, useState} from "react";
import {ProductCard} from "../components/ProductCard";
import {Categories} from "../components/Categories";
import {Row} from "../layout/Row";

export function Catalog({isPage, searchInput}) {
    const [searchField, setSearchField] = useState(searchInput ? searchInput : "")
    const [searchFieldToSend, setSearchFieldToSend] = useState("")
    const [catalog, setCatalog] = useState([])
    const [loading, setLoading] = useState(false)

    const [categoryId, setCategoryId] = useState(0)
    const [offset, setOffset] = useState(0)

    const [showMoreButton, setShowMoreButton] = useState(true)

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            setCatalog([])
            setSearchFieldToSend(searchField)
        }
    }

    useEffect(() => {
        const loadCatalog = async () => {
            setLoading(true)
            try {
                await fetch(`http://localhost:7070/api/items?categoryId=${categoryId}&offset=${offset}&q=${isPage ? searchFieldToSend : ""}`)
                    .then(response => response.json())
                    .then(response => {
                        setCatalog([...catalog, ...response])
                        response.length < 6 ? setShowMoreButton(false) : setShowMoreButton(true)
                    })
            } catch (e) {

            } finally {
                setLoading(false)
            }

        }
        loadCatalog()

    }, [categoryId, offset, searchFieldToSend])

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
        setCatalog([])
    }

    return (<section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {loading && <div className="preloader"/>}

            {isPage && <form className="catalog-search-form form-inline">
                <input className="form-control" placeholder="Поиск" value={searchField}
                       onChange={(e) => setSearchField(e.target.value)}
                       onKeyDown={handleKeyPress}/>
            </form>}

            {!loading && <Categories categories={categories}
                                     categoryId={categoryId}
                                     setCategoryId={handleSetCategoryId}/>}

            {!loading && <Row>{catalog.map(item => <ProductCard key={item.id} product={item} isCatalog/>)}</Row>}

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

