import {Header} from "./layout/Header";
import {Body} from "./layout/Body";
import {Footer} from "./layout/Footer";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import {HomePage} from "./pages/HomePage";
import {About} from "./pages/About";
import {Catalog} from "./pages/Catalog";
import {Cart} from "./pages/Cart";
import {Contacts} from "./pages/Contacts";
import {NotFound} from "./pages/NotFound";

import './style.css';
import {ProductPage} from "./pages/ProductPage";
import GlobalState from "./context/GlobalState";

function App() {
    return (
        <GlobalState>
            <Header/>
            <Body>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path={'/catalog'} element={<Catalog/>}/>
                    <Route path={'/contacts'} element={<Contacts/>}/>
                    <Route path={'/products/:productId'} element={<ProductPage/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Body>
            <Footer/>
        </GlobalState>
    )
}

export default App;
