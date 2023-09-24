import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <Container fluid className='fixed-bottom' data-testid="footer-component">
            <Row className='p-2 bg-dark text-light align-items-center'>
                <Col className='text-center'>
                    Market Curency
                </Col>
            </Row>
        </Container>
    )
}
export default Footer;