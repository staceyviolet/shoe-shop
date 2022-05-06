import { useSelector } from 'react-redux';
import { Loader }      from '../Loader';

export function OrderForm({ onChange, onSubmit }) {
    const { owner, loading } = useSelector((store) => store.cart)

    if (loading) {
        return <Loader/>
    }

    return (
        <form className="card-body" onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input className="form-control"
                       id="phone" name={'phone'}
                       placeholder="Ваш телефон"
                       onChange={onChange}
                       value={owner.phone}
                       required
                />
            </div>

            <div className="form-group">
                <label htmlFor="address">Адрес доставки</label>
                <input className="form-control"
                       id="address"
                       name={'address'}
                       placeholder="Адрес доставки"
                       onChange={onChange}
                       value={owner.address}
                       required
                />
            </div>

            <div className="form-group form-check">
                <input type="checkbox"
                       className="form-check-input"
                       id="agreement"
                       required/>
                <label className="form-check-label" htmlFor="agreement">
                    Согласен с правилами доставки
                </label>
            </div>

            <button type="submit" className="btn btn-outline-secondary">Оформить</button>
        </form>
    )
}

