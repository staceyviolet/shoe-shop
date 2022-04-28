import {Row} from "./Row";
import {Col} from "./Col";
import {TopMenu} from "../components/TopMenu";

export function Header({searchInput, setSearchInput}) {
    return (
        <header className="container">
            <Row>
                <Col>
                    <TopMenu searchInput={searchInput} setSearchInput={setSearchInput}/>
                </Col>
            </Row>
        </header>
    )
}

