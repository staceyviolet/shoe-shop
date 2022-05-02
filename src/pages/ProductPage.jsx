import { useEffect }                from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams }                from 'react-router';
import { loadProductRequest }       from '../globalState/actions/actionCreators';
import { Col }                      from '../layout/Col';
import { Banner }                   from '../components/Banner';
import { Row }                      from '../layout/Row';
import { CatalogItem }              from './CatalogItem';

export function ProductPage() {
    const { product, loading, error } = useSelector(state => state.product);

    const dispatch = useDispatch()
    const { productId } = useParams()

    useEffect(() => {
        dispatch(loadProductRequest(productId));
    }, [dispatch, productId])

    return (
        <Row>
            <Col>
                <Banner/>
                {!error ?
                 (
                     loading ?
                     <div className="preloader">
                         <span></span>
                         <span></span>
                         <span></span>
                         <span></span>
                     </div>
                             : <CatalogItem productId={productId} product={product}/>
                 )
                        : <p>Упс! Что-то пошло не так</p>}

            </Col>
        </Row>
    )
}

