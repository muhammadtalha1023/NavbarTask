import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Body()
{
    return(
        <Container>
        <Row>
        <Col xs={5} className="p-5 m-1">
            <h1 className='display-2 text-center'>The Watch that has it all</h1>
            <p1 className='fs-5 text-center'>Betheme is ready for your ecommerce business</p1>
        </Col>
        <Col xs={6}>
            <img src="//themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/bethemestore-slider-pic1.webp" width={700} height={500}></img>

        </Col>
        </Row>
        </Container>
    )
}

export default Body;