import {Link, NavLink} from "react-router-dom";
import {useNavigate} from "react-router";
import {useState} from "react";

export function TopMenu({searchInput, setSearchInput}) {
    const navigate = useNavigate()

    const handleCartClick = () => {
        navigate('/cart')
    }

    const [showSearch, setShowSearch] = useState(false)

    const handleSearchClick = () => {
        if (searchInput) {
            navigate("/catalog")

        } else {
            setShowSearch(!showSearch)
        }
    }

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
                            <div className="header-controls-cart-full">1</div>
                            <div className="header-controls-cart-menu"/>
                        </div>
                    </div>
                    <form data-id="search-form"
                          className={`header-controls-search-form form-inline ${!showSearch ? 'invisible' : ''}`}>
                        <input className="form-control" placeholder="Поиск" value={searchInput}
                               onChange={(e) => setSearchInput(e.target.value)}/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

