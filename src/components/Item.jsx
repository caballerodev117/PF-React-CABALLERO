import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";

function Item({ info }) {

  return (
    <Col> 
      <Card style={{ width: '20rem', padding: 5 }}>
        <Card.Title>{info.title}</Card.Title>
        <Link to={`/detalle/${info.id}`} className='producto'>
          <Card.Img 
            variant="top" 
            src={info.img} 
            alt={info.title} 
            style={{ 
              height: '15rem', 
              objectFit: 'contain', 
              objectPosition: 'center 20%' 
            }} 
          />
        </Link>
        <Card.Body>
          <Card.Text>
            {info.description}
          </Card.Text>
          <Card.Text>
            <Link to={`/detalle/${info.id}`}>
              <FontAwesomeIcon icon={faMagnifyingGlassPlus} beat />
              ${info.price}
            </Link> 
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;