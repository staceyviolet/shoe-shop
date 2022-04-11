import {useEffect, useState} from "react";
import {ProductCard} from "../components/ProductCard";
import {Categories} from "../components/Categories";
import {Row} from "../layout/Row";

export function Catalog() {
    const [catalog, setCatalog] = useState([])
    const [loading, setLoading] = useState(false)

    const [categoryId, setCategoryId] = useState(0)
    const [offset, setOffset] = useState(6)

    useEffect(() => {
        const urlNoCat = `http://localhost:7070/api/items`
        const urlWithCat = `http://localhost:7070/api/items?categoryId=${categoryId}`
        const urlWithOffset = `http://localhost:7070/api/items?offset=${offset}`

        const loadCatalog = async () => {
            setLoading(true)
            try {
                await fetch(`http://localhost:7070/api/items?categoryId=${categoryId}&offset=${offset}`)
                    .then(response => response.json())
                    .then(response => setCatalog(prevState => prevState.concat(response)))
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
            {!loading && <Categories categories={categories} onClick={setCategoryId}/>}
            {!loading && <Row>{catalog.map(item => <ProductCard key={item.id} product={item} isCatalog/>)}</Row>}
            <div className="text-center">
                <button className="btn btn-outline-primary" onClick={() => setOffset(prevState => prevState + 6)}>Загрузить ещё</button>
            </div>
        </section>

    )
}

