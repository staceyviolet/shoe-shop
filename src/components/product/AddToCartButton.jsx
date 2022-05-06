export function AddToCartButton({ visible, disabled, onClick }) {
    return (!visible ? null :
            <button disabled={disabled}
                    onClick={onClick}
                    className="btn btn-danger btn-block btn-lg">
                В корзину
            </button>

    )
}

