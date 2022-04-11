import {useEffect, useState} from "react";
import {ProductCard} from "./ProductCard";

export function TopSales() {
    const [topSales, setTopSales] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const loadTopSales = async () => {
            setLoading(true)
            try {
                await fetch('http://localhost:7070/api/top-sales')
                    .then(response => response.json())
                    .then(response => setTopSales(response))
            } catch (e) {

            } finally {
                setLoading(false)
            }

        }
        loadTopSales()

    }, [])

    return (!loading && !topSales.length ? null :
            <section className="top-sales">
                <h2 className="text-center">Хиты продаж!</h2>
                {loading ? <div className="preloader"/>
                    : <div className="row">
                        {topSales.map(item => <ProductCard key={item.id} product={item}/>)}
                    </div>
                }
            </section>

    )
}

