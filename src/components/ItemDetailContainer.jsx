import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {

  const [data, setData] = useState('');
  const { detalleId } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'Items', detalleId);
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
  }, [detalleId])


  return (
    <div className="container">
      {data ? (
        <ItemDetail data={data} />
      ) : (
        <p>El item no existe</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;