import Item from "./Item";
import { Row } from "react-bootstrap";

function ItemList({ data = [] }) {
  return (
    <Row>
      {data.map(p => <Item key={p.id} info={p} />)}
    </Row>
  )
}

export default ItemList;

