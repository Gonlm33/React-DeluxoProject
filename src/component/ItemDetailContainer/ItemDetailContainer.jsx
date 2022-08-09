import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const cds = [
    { id: 1, image: "../src/img/emilia-tu-crees-en-mi.png", category: "fem", title: "Emilia- Tu crees en mi" },
    { id: 2, image: "../src/img/Karina-sin-verguenza.png", category: "fem", title: "Karina- Sin verguenza" },
    { id: 3, image: "../src/img/Gardel-inigualable.png", category: "fem", title: "Gardel- Inigualable" },
    { id: 4, image: "../src/img/Leo-Mattioli-Esto...-Es-romantico.png", category: "masc", title: "Leo Mattioli- Esto... Es romantico" },
    { id: 5, image: "../src/img/Rodrigo-la-mano-de-dios.png", category: "masc", title: "Rodrigo- La mano de Dios" },
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData =new Promise(resolve => {
            setTimeout(() => {
                resolve(cds);
            }, 1000);
        });

        getData.then(res => setData(res.find(cds => cds.id === parseInt(detalleId))));
}, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;