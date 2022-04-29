import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart }           from '../globalState/actions/actionCreators';
import { Row }                      from '../layout/Row';
import { Col }                      from '../layout/Col';
import { Banner }                   from '../components/Banner';

export function Cart() {
    const storeItems = useSelector((store) => store.cart.cartItems)
    const totalOrderSum = !!storeItems.length ? storeItems.map(item => item.product.price).reduce((x, y) => x + y) : 0

    const dispatch = useDispatch()

    const handleRemove = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    return (
        <Row>
            <Col>
                <Banner/>
                <section className="cart">
                    <h2 className="text-center">Корзина</h2>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Название</th>
                            <th scope="col">Размер</th>
                            <th scope="col">Кол-во</th>
                            <th scope="col">Стоимость</th>
                            <th scope="col">Итого</th>
                            <th scope="col">Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {!!storeItems.length && storeItems.map(item => {
                            return (
                                <tr>
                                    <td scope="row">1</td>
                                    <td><a href="/products/1.html">{item.product.title}</a></td>
                                    <td>{item.size}</td>
                                    <td>{item.count}</td>
                                    <td>{item.product.price}</td>
                                    <td>{item.product.price}</td>
                                    <td>
                                        <button className="btn btn-outline-danger btn-sm"
                                                onClick={() => handleRemove(item.id)}>Удалить
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                        <tr>
                            <td colSpan="5" className="text-right">Общая стоимость</td>
                            <td>{totalOrderSum}</td>
                        </tr>
                        </tbody>
                    </table>
                </section>
                <section className="order">
                    <h2 className="text-center">Оформить заказ</h2>
                    <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
                        <form className="card-body">
                            <div className="form-group">
                                <label htmlFor="phone">Телефон</label>
                                <input className="form-control" id="phone" placeholder="Ваш телефон"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Адрес доставки</label>
                                <input className="form-control" id="address" placeholder="Адрес доставки"/>
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="agreement"/>
                                <label className="form-check-label" htmlFor="agreement">Согласен с правилами
                                    доставки</label>
                            </div>
                            <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                        </form>
                    </div>
                </section>
            </Col>
        </Row>
    )
}

