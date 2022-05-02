import { useState }    from 'react';
import { useDispatch } from 'react-redux';
import { addToCart }   from '../globalState/actions/actionCreators';
import { Row }         from '../layout/Row';

export function CatalogItem({ productId, product }) {
    const dispatch = useDispatch()

    const [sizeSelected, setSizeSelected] = useState('')
    const [counter, setCounter] = useState(1)
    const increment = () => {
        setCounter(prevState => prevState !== 10 ? prevState + 1 : prevState)
    }
    const decrement = () => {
        setCounter(prevState => prevState !== 0 ? prevState - 1 : prevState)
    }

    const handleAdd = (productId, product, counter, sizeSelected) => {
        dispatch(addToCart({
                               id: productId,
                               product: product,
                               count: counter,
                               size: sizeSelected
                           }))
    }

    return (
        <section className="catalog-item">
            <h2 className="text-center">{product.title}</h2>
            <Row>
                <div className="col-5">
                    <img src={product.images[0]}
                         className="img-fluid"
                         alt=""/>
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <td>Артикул</td>
                            <td>{product.sku}</td>
                        </tr>
                        <tr>
                            <td>Производитель</td>
                            <td>{product.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Цвет</td>
                            <td>{product.color}</td>
                        </tr>
                        <tr>
                            <td>Материалы</td>
                            <td>{product.material}</td>
                        </tr>
                        <tr>
                            <td>Сезон</td>
                            <td>{product.season}</td>
                        </tr>
                        <tr>
                            <td>Повод</td>
                            <td>{product.reason}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <p>Размеры в наличии: {product.sizes
                                                      .filter(size => size.avalible === true)
                                                      .map(size => {
                                                          return (
                                                              <span key={size.size}
                                                                    className={`catalog-item-size ${sizeSelected === size.size && 'selected'}`}
                                                                    onClick={() => setSizeSelected(size.size)}>{size.size}</span>)
                                                      })} </p>

                        {!product.sizes
                                 .filter(size => size.avalible === true).length ? null
                                                                                :
                         <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                        <button className="btn btn-secondary" onClick={decrement}>-</button>
                                        <span className="btn btn-outline-primary">{counter}</span>
                                        <button className="btn btn-secondary" onClick={increment}>+</button>
                                    </span>
                         </p>
                        }
                    </div>

                    {!product.sizes.filter(size => size.avalible === true).length ? null :
                     <button disabled={!sizeSelected}
                             onClick={() => handleAdd(productId, product, counter, sizeSelected)}
                             className="btn btn-danger btn-block btn-lg">
                         В корзину
                     </button>
                    }
                </div>
            </Row>
        </section>
    )
}

