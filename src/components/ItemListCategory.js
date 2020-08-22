import React, { useEffect } from 'react';
import ItemListCategoryContainer from './ItemListCategoryContainer';
import { useParams } from "react-router-dom";

function ItemListCategory() {      
    const { categoryId } = useParams();

    useEffect(() => {
        console.log('Received categoryId to', categoryId) 
        return function cleanup() {
            console.log("cleaned up");
        };        
    }, [categoryId]);  
    
    return (
        <>
            <ItemListCategoryContainer categoryId={categoryId} />
        </>
    )
}

export default ItemListCategory;