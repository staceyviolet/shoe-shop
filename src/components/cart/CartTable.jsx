import { Link }      from 'react-router-dom';

export function CartTable({ cartItems, onRemove }) {
    const totalOrderSum = !!cartItems.length ? cartItems.map(item => item.product.price * item.count).reduce((x, y) => x + y)
                                             : 0
    let counter = 1;

    return (
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
            {!!cartItems.length && cartItems.map(item => {
                return (
                    <tr key={item.id}>
                        <td>{counter++}</td>
                        <td><Link to={'/products/' + item.id}>{item.product.title}</Link></td>
                        <td>{item.size}</td>
                        <td>{item.count}</td>
                        <td>{item.product.price}</td>
                        <td>{item.product.price * item.count}</td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm"
                                    onClick={() => onRemove(item.id)}>Удалить
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
    )
}

