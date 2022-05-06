import { Catalog }           from './Catalog';
import { CatalogSearchForm } from './CatalogSearchForm';

export function CatalogContainer({ isPage }) {
    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            {isPage && <CatalogSearchForm/>}

            <Catalog/>

        </section>
    )
}

