import React, { useEffect } from 'react';
import ItemListCategoryContainer from './ItemListCategoryContainer';
import { useParams } from "react-router-dom";

function ItemDetail() {      
    const { categoryId } = useParams();

    useEffect(() => {
        console.log('Received categoryId to', categoryId) 
        return () => {
            console.log('Will change categoryId to', categoryId);
        };        
    }, [categoryId]);

    useEffect(() => {
        return function cleanup() {
            console.log("cleaned up");
        };         
    }, []);    
    
    return (
        <>
            <ItemListCategoryContainer categoryId={categoryId} />
        </>
    )
}

export default ItemDetail;