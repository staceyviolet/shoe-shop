import { CatalogContainer }  from '../components/catalog/CatalogContainer';
import { TopSalesContainer } from '../components/homePage/TopSalesContainer';
import { Row }               from '../layout/Row';
import { Col }               from '../layout/Col';
import { Banner }            from '../components/Banner';

export function HomePage() {
    return (
        <Row>
            <Col>
                <Banner/>
                <TopSalesContainer/>
                <CatalogContainer/>
            </Col>
        </Row>
    )
}

