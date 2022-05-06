import { Provider }     from 'react-redux';
import { Route }        from 'react-router-dom';
import { Routes }       from 'react-router';
import { Header }       from './layout/Header';
import { Body }         from './layout/Body';
import { Footer }       from './layout/Footer';
import { CatalogPage }  from './pages/CatalogPage';
import { HomePage }     from './pages/HomePage';
import { AboutPage }    from './pages/AboutPage';
import { CartPage }     from './pages/CartPage';
import { ContactsPage } from './pages/ContactsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductPage }  from './pages/ProductPage';

import store from './globalState/store';

import './style.css';

function App() {
    return (
        <Provider store={store}>
            <Header/>
            <Body>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/cart'} element={<CartPage/>}/>
                    <Route path={'/catalog'} element={<CatalogPage/>}/>
                    <Route path={'/contacts'} element={<ContactsPage/>}/>
                    <Route path={'/products/:productId'} element={<ProductPage/>}/>
                    <Route path={'/cart'} element={<CartPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Routes>
            </Body>
            <Footer/>
        </Provider>
    )
}

export default App;
