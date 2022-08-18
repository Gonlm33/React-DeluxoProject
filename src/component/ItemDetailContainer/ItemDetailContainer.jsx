import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

// const cds = [
//     { id: 1, price: 4000, image: "../src/img/emilia-tu-crees-en-mi.png", category: "fem", title: "Emilia- Tu crees en mi" },
//     { id: 2, price: 5000, image: "../src/img/Karina-sin-verguenza.png", category: "fem", title: "Karina- Sin verguenza" },
//     { id: 3, price: 4500, image: "../src/img/Gardel-inigualable.png", category: "fem", title: "Gardel- Inigualable" },
//     { id: 4, price: 8000, image: "../src/img/Leo-Mattioli-Esto...-Es-romantico.png", category: "masc", title: "Leo Mattioli- Esto... Es romantico" },
//     { id: 5, price: 9500, image: "../src/img/Rodrigo-la-mano-de-dios.png", category: "masc", title: "Rodrigo- La mano de Dios" },
// ];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'products', detalleId);
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [detalleId])
        // const getData =new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(cds);
        //     }, 1000);
        // });

//         getData.then(res => setData(res.find(cds => cds.id === parseInt(detalleId))));
// }, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;