import { CatalogItem } from '../components/catalog/CatalogItem';
import { Col }         from '../layout/Col';
import { Banner }      from '../components/Banner';
import { Row }         from '../layout/Row';

export function ProductPage() {
    return (
        <Row>
            <Col>
                <Banner/>
                <CatalogItem/>
            </Col>
        </Row>
    )
}

