import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from "react-router-dom";

function ItemDetail() {      
    const { id } = useParams();      
    return (
        <>
            <ItemDetailContainer id= {id} />
        </>
    )
}

export default ItemDetail;