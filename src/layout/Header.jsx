import {Row} from "./Row";
import {Col} from "./Col";
import {TopMenu} from "../components/TopMenu";

export function Header() {
    return (
        <header className="container">
            <Row>
                <Col>
                    <TopMenu/>
                </Col>
            </Row>
        </header>
    )
}

