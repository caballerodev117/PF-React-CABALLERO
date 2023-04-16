import { Link } from 'react-router-dom';

function Item({ info }) {


  return (
    <>
      <Link to={`/detalle/${info.id}`} className='producto'>
        <img src={info.img} height='150px' alt= {info.title} />
      </Link>
      <p>{info.title} {info.description} {info.price}</p>
    </>

  )
}

export default Item;