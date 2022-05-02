import { useDispatch, useSelector } from 'react-redux';
import { useNavigate }              from 'react-router';
import { useState }                 from 'react';
import { changeSearchField }        from '../../globalState/actions/actionCreators';
import { HeaderControls }           from './HeaderControls';
import { HeaderSearchForm }         from './HeaderSearchForm';
import { Logo }                     from './Logo';
import { TopMenuItem }              from './TopMenuItem';

const topMenuItems = [
    { title: 'Главная', path: '/' },
    { title: 'Каталог', path: '/catalog' },
    { title: 'О магазине', path: '/about' },
    { title: 'Контакты', path: '/contacts' },
]

export function TopMenu() {
    const { search } = useSelector(state => state.catalog);
    const [showSearch, setShowSearch] = useState(false)

    const navigate = useNavigate()

    const handleCartClick = () => {
        navigate('/cart')
    }
    const dispatch = useDispatch()

    const handleChangeSearchField = (e) => {
        e.preventDefault()
        dispatch(changeSearchField(e.target.value))
    }

    const handleSearchClick = () => {
        if (!!search.length) {
            navigate('/catalog')

        } else {
            setShowSearch(!showSearch)
        }
    }

    const itemsInCart = useSelector((store) => store.cart.cartItems)
    const itemsInCartCount = !!itemsInCart.length ? itemsInCart.map(item => item.count).reduce((a, b) => a + b) : 0

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo/>

            <div className="collapse navbar-collapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">
                    {topMenuItems.map((item, index) => {
                        return <TopMenuItem key={index} path={item.path} title={item.title}/>
                    })}
                </ul>

                <div>
                    <HeaderControls onSearchClick={handleSearchClick}
                                    onCartClick={handleCartClick}
                                    itemsInCart={itemsInCartCount !== 0 && itemsInCartCount}/>

                    <HeaderSearchForm showSearch={showSearch}
                                      onChange={handleChangeSearchField}
                                      value={search}/>
                </div>
            </div>
        </nav>
    )
}

