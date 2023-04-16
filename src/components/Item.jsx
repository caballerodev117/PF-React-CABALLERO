import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

function Item({ info }) {

  return (
    <Card style={{ width: '18rem' }}>
      <Link to={`/detalle/${info.id}`} className='producto'>
      <Card.Img variant="top" src={info.img} alt= {info.title} />
      </Link>
      <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <Card.Text>
          {info.description}
          <p>${info.price}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}



export default Item;