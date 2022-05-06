export function Quantity({ visible, counter, setCounter }) {
    const increment = () => {
        setCounter(prevState => prevState !== 10 ? prevState + 1 : prevState)
    }
    const decrement = () => {
        setCounter(prevState => prevState !== 0 ? prevState - 1 : prevState)
    }

    return (!visible ? null
                     :
            <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                        <button className="btn btn-secondary" onClick={decrement}>-</button>
                                        <span className="btn btn-outline-primary">{counter}</span>
                                        <button className="btn btn-secondary" onClick={increment}>+</button>
                                    </span>
            </p>
    )
}

