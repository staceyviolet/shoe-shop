import { useState, useEffect }      from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams }                from 'react-router';
import { addToCart }                from '../../globalState/reducers/cartReducer';
import { loadProductRequest }       from '../../globalState/reducers/loadProductReducer';
import { Row }                      from '../../layout/Row';
import { Loader }                   from '../Loader';
import { AddToCartButton }          from '../product/AddToCartButton';
import { ProductPageTable }         from '../product/ProductPageTable';
import { Quantity }                 from '../product/Quantity';
import { Sizes }                    from '../product/Sizes';

export function CatalogItem() {
    const { product, loading, error } = useSelector(state => state.product);
    const { productId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadProductRequest(productId));
    }, [dispatch, productId])

    const [sizeSelected, setSizeSelected] = useState('')
    const [counter, setCounter] = useState(1)

    const handleAdd = (productId, product, counter, sizeSelected) => {
        dispatch(addToCart({
                               id: productId,
                               product: product,
                               count: counter,
                               size: sizeSelected
                           }))
    }

    const sizesAvailable = !!product.sizes.filter(size => size.avalible === true).length

    if (error) {
        return <section className="catalog-item"><p>Упс! Что-то пошло не так</p></section>
    }

    if (loading) {
        return <section className="catalog-item"><Loader/></section>
    }

    return (
        <section className="catalog-item">
            <h2 className="text-center">{product.title}</h2>

            <Row>
                <div className="col-5">
                    <img src={product.images[0]} className="img-fluid" alt="productImage"/>
                </div>

                <div className="col-7">
                    <ProductPageTable product={product}/>
                    <div className="text-center">
                        <Sizes sizes={product.sizes} sizeSelected={sizeSelected} setSizeSelected={setSizeSelected}/>
                        <Quantity visible={sizesAvailable}
                                  counter={counter} setCounter={setCounter}/>
                    </div>
                    <AddToCartButton visible={sizesAvailable}
                                     disabled={!sizeSelected}
                                     onClick={() => handleAdd(productId, product, counter, sizeSelected)}/>
                </div>
            </Row>
        </section>
    )
}

