import { Row } from '../layout/Row';
import { Col } from '../layout/Col';

export function NotFoundPage() {
    return (
        <Row>
            <Col>
                <div className="banner">
                    <img src="/img/banner.jpg" className="img-fluid" alt="К весне готовы!"/>
                    <h2 className="banner-header">К весне готовы!</h2>
                </div>
                <section className="top-sales">
                    <h2 className="text-center">Страница не найдена</h2>
                    <p>
                        Извините, такая страница не найдена!
                    </p>
                </section>
            </Col>
        </Row>
    )
}

