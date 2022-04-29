import { useState } from 'react';
import { Provider } from 'react-redux';
import { Route }    from 'react-router-dom';
import { Routes }   from 'react-router';
import store        from './globalState/store';

import { Header }      from './layout/Header';
import { Body }        from './layout/Body';
import { Footer }      from './layout/Footer';
import { HomePage }    from './pages/HomePage';
import { About }       from './pages/About';
import { Catalog }     from './pages/Catalog';
import { Cart }        from './pages/Cart';
import { Contacts }    from './pages/Contacts';
import { NotFound }    from './pages/NotFound';
import { ProductPage } from './pages/ProductPage';

import './style.css';

function App() {
    const [searchInput, setSearchInput] = useState('')
    return (
        <Provider store={store}>
            <Header searchInput={searchInput} setSearchInput={setSearchInput}/>
            <Body>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path={'/catalog'} element={<Catalog isPage searchInput={searchInput}/>}/>
                    <Route path={'/contacts'} element={<Contacts/>}/>
                    <Route path={'/products/:productId'} element={<ProductPage/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Body>
            <Footer/>
        </Provider>
    )
}

export default App;
