export function HeaderControls({ onSearchClick, onCartClick, itemsInCart }) {
    return (
        <div className="header-controls-pics">
            <div data-id="search-expander"
                 className="header-controls-pic header-controls-search"
                 onClick={onSearchClick}/>

            <div className="header-controls-pic header-controls-cart"
                 onClick={onCartClick}>
                {!!itemsInCart && <div className="header-controls-cart-full">{itemsInCart}</div>}
                <div className="header-controls-cart-menu"/>
            </div>

        </div>
    )
}

