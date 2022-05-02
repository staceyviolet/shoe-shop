import { Row }      from '../layout/Row';
import { Col }      from '../layout/Col';
import { Banner }   from '../components/homePage/Banner';
import { TopSales } from '../components/homePage/TopSales';
import { Catalog }  from './Catalog';

export function HomePage() {
    return (
        <Row>
            <Col>
                <Banner/>
                <TopSales/>
                <Catalog/>
            </Col>
        </Row>
    )
}

