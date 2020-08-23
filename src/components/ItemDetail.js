import React, { useEffect } from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { useParams } from "react-router-dom";

function ItemDetail() {      
    const { id } = useParams();
    
    useEffect(() => {
        console.log('Mounted ItemDetail')
        return () => {
            console.log('Dismounted ItemDetail');
        };          
    }, []);    

    return (
        <>
            <ItemDetailContainer id={id} />
        </>
    )
}

export default ItemDetail;