import { useDispatch, useSelector }                              from 'react-redux';
import { CartTable }                                             from '../components/cart/CartTable';
import { OrderForm }                                             from '../components/cart/OrderForm';
import { changeOwnerDetails, placeOrderRequest, removeFromCart } from '../globalState/reducers/cartReducer';
import { Row }                                                   from '../layout/Row';
import { Col }                                                   from '../layout/Col';
import { Banner }                                                from '../components/Banner';

export function CartPage() {
    const { cartItems, error, success } = useSelector((store) => store.cart)

    const dispatch = useDispatch()

    const handleRemove = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    const handleFormChange = (e) => {
        e.preventDefault()
        dispatch(changeOwnerDetails({ [e.target.name]: e.target.value }))
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

                    <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
                        <OrderForm onChange={handleFormChange} onSubmit={handleSubmit}/>
                    </div>

                    {error && <p>Ошибка оформления заказа</p>}

                    {success && <p>Заказ успешно оформлен</p>}
                </section>
            </Col>
        </Row>
    )
}

