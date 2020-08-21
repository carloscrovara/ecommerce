import React, { useEffect } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from "react-router-dom";

function ItemDetail() {      
    const { id } = useParams();
    
    useEffect(() => {
        console.log('Received id to', id)
        return function cleanup() {
            console.log("cleaned up");
        };          
    }, [id]);    

    return (
        <>
            <ItemDetailContainer id={id} />
        </>
    )
}

export default ItemDetail;