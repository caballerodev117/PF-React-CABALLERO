import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer({ greeting }) {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'Items');
    if (categoryId) {
      const queryFilter = query(queryCollection, where('categoryId', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(p => ({ id: p.id, ...p.data() }))))
    } else {
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(p => ({ id: p.id, ...p.data() }))))
    }
  }, [categoryId])

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{greeting}</h1>
        <hr className="my-4" />
        <p className="lead">Aquí podrás encontrar la mejor variedad de productos orgánicos.</p>
      </div>
      <ItemList data={data} />
    </div>
  );
}

export default ItemListContainer;

