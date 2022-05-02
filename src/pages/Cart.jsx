import { useDispatch, useSelector } from 'react-redux';
import {
    changeOwnerDetails,
    placeOrderRequest,
    removeFromCart
}                                   from '../globalState/actions/actionCreators';
import { Row }                      from '../layout/Row';
import { Col }                      from '../layout/Col';
import { Banner }                   from '../components/Banner';
import { CartTable }                from './CartTable';
import { OrderForm }                from './OrderForm';

export function Cart() {
    const { cartItems, owner, loading, error, success } = useSelector((store) => store.cart)

    const dispatch = useDispatch()

    const handleRemove = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    const handleFormChange = (e) => {
        e.preventDefault()
        dispatch(changeOwnerDetails(e.target.name, e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(placeOrderRequest())
    }

    return (
        <Row>
            <Col>
                <Banner/>
                <section className="cart">
                    <h2 className="text-center">Корзина</h2>

                    <CartTable onRemove={handleRemove} cartItems={cartItems}/>
                </section>

                <section className="order">
                    <h2 className="text-center">Оформить заказ</h2>

                    {loading ? (
                                 <div className="preloader">
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                     <span></span>
                                 </div>
                             )
                             :
                     <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
                         <OrderForm onChange={handleFormChange} onSubmit={handleSubmit} owner={owner}/>
                     </div>
                    }

                    {error && <p>Ошибка оформления заказа</p>}
                    {success && <p>Заказ успешно оформлен</p>}
                </section>
            </Col>
        </Row>
    )
}

