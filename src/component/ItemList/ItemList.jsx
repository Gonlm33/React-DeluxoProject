import Item from "../Item/Item";
import React from 'react'

const ItemList = ({data =[]}) => {
  return (
    data.map(cd => <Item key={cd.id} info={cd} />)
  );
}

export default ItemList;