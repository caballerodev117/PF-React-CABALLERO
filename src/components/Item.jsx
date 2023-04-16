import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Item({ info }) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Title>{info.title}</Card.Title>
      <Link to={`/detalle/${info.id}`} className='producto'>
        <Card.Img variant="top" src={info.img} alt={info.title} />
      </Link>
      <Card.Body>
        <Card.Text>
          {info.description}
          <p>${info.price}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}



export default Item;