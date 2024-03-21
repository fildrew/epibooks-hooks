import { Card, Col, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import Container from 'react-bootstrap/Container'

const AllTheBooks = () => {
  return (
    <Container fluid>
      <Row className="row-gap-4 py-2">
        {fantasy.map((book) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} xxl={2} key={book.asin}  data-testid="book">
              <Card>
                <Card.Img variant="top" src={book.img} className="image" />
                <Card.Body className="d-flex flex-column card-bod">
                  <Card.Title>
                    {book.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  )
}

export default AllTheBooks