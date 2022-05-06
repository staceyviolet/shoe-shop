export function Sizes({ sizes, sizeSelected, setSizeSelected }) {
    return (
        <p>Размеры в наличии: {sizes
            .filter(size => size.avalible === true)
            .map(size => {
                return (
                    <span key={size.size}
                          className={`catalog-item-size ${sizeSelected === size.size && 'selected'}`}
                          onClick={() => setSizeSelected(size.size)}>{size.size}</span>)
            })} </p>
    )
}

