import React, { useEffect } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from "react-router-dom";

function ItemDetail() {      
    const { id } = useParams();
    
    useEffect(() => {
        console.log('Received id to', id)
        return () => {
            console.log('Will change id to', id);
        };   
    }, [id]);

    return (
        <>
            <ItemDetailContainer id={id} />
        </>
    )
}

export default ItemDetail;