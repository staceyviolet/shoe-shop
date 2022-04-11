import {Link} from "react-router-dom";

export function ProductCard({product, isCatalog}) {
    return (
        <div className="col-4">
            <div className={`card ${isCatalog ? 'catalog-item-card' : ''} `}
                 style={{height:'622px'}}
            >
                <img src={product.images[0]}
                     style={{height: '400px', objectFit: 'cover'}}
                     className="card-img-top img-fluid" alt={product.title}/>
                <div className="card-body">
                    <p className="card-text">{product.title}</p>
                    <p className="card-text">{numberWithSpaces(product.price)} руб.</p>
                    <Link to={`/products/${product.id}`}
                          className="btn btn-outline-primary">
                        Заказать
                    </Link>
                </div>
            </div>
        </div>
    )
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
