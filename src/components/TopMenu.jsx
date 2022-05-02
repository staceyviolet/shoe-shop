import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink }            from 'react-router-dom';
import { useNavigate }       from 'react-router';
import { useState }          from 'react';
import { changeSearchField } from '../globalState/actions/actionCreators';

export function TopMenu(props) {
    const { search } = useSelector(state => state.catalog);

    const navigate = useNavigate()

    const handleCartClick = () => {
        navigate('/cart')
    }
    const dispatch = useDispatch()

    const handleChangeSearchField = (e) => {
        e.preventDefault()
        dispatch(changeSearchField(e.target.value))
    }

    const [showSearch, setShowSearch] = useState(false)

    const handleSearchClick = () => {
        if (!!search.length) {
            navigate('/catalog')

        } else {
            setShowSearch(!showSearch)
        }
    }

    const itemsInCart = useSelector((store) => store.cart.cartItems).length

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="/img/header-logo.png" alt="Bosa Noga"/>
            </Link>
            <div className="collapase navbar-collapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Главная</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/catalog">Каталог</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">О магазине</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
                    </li>
                </ul>
                <div>
                    <div className="header-controls-pics">
                        <div data-id="search-expander"
                             className="header-controls-pic header-controls-search"
                             onClick={handleSearchClick}/>
                        <div className="header-controls-pic header-controls-cart" onClick={handleCartClick}>
                            {!!itemsInCart && <div className='header-controls-cart-full'>{itemsInCart}</div>}
                            <div className="header-controls-cart-menu"/>
                        </div>
                    </div>
                    <form data-id="search-form"
                          className={`header-controls-search-form form-inline ${!showSearch ? 'invisible' : ''}`}>
                        <input className="form-control" placeholder="Поиск" value={search}
                               onChange={handleChangeSearchField}/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

