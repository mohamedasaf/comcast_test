import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, InputGroup } from 'reactstrap';
import InputBox from '../InputBox/InputBox';

interface IProps {
    getSearchValue(value: string): void;
}

const Header = (props: IProps) => {
    var { getSearchValue } = props

    return (
        <Container fluid data-testid="header-component">
            <Row className='p-2 bg-dark text-light align-items-center'>
                <Col>
                    Market Curency
                </Col>
                <Col>
                    <InputGroup>
                        <InputBox onChange={(val: string) => getSearchValue(val)} placeholder="Search market symbol" />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Header