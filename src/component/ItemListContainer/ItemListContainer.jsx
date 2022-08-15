import React, {useState, useEffect} from 'react';
import ItemList from "../ItemList/ItemList";
import Articulos from "../Articulos/Articulos";
import { useParams } from 'react-router-dom';

const cds = [
  { id: 1, price: 4000, image: "../src/img/emilia-tu-crees-en-mi.png", category: "fem", title: "Emilia- Tu crees en mi" },
  { id: 2, price: 5000, image: "../src/img/Karina-sin-verguenza.png", category: "fem", title: "Karina- Sin verguenza" },
  { id: 3, price: 4500, image: "../src/img/Gardel-inigualable.png", category: "masc", title: "Gardel- Inigualable" },
  { id: 4, price: 8000, image: "../src/img/Leo-Mattioli-Esto...-Es-romantico.png", category: "masc", title: "Leo Mattioli- Esto... Es romantico" },
  { id: 5, price: 9500, image: "../src/img/Rodrigo-la-mano-de-dios.png", category: "masc", title: "Rodrigo- La mano de Dios" },
];

export const ItemListContainer = ({ texto }) => {
  const [data, setData] = useState ([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(cds);
      }, 1000);
    });
    if (categoriaId){
      getData.then(res => setData(res.filter(fem => fem.category === categoriaId)));
    } else {
      getData.then(res => setData(res));
    }
  }, [categoriaId])


  return (
    <>
    <Articulos greeting={texto} />
    <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;