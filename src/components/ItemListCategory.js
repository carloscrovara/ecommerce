import React, { useEffect } from 'react';
import ItemListCategoryContainer from './ItemListCategoryContainer';
import { useParams } from "react-router-dom";

function ItemListCategory() {      
    const { categoryId } = useParams();

    useEffect(() => {
        console.log('Mounted ItemListCategory')
        return () => {
            console.log('Dismounted ItemListCategory');
        };       
    }, []);  
    
    return (
        <>
            <ItemListCategoryContainer categoryId={categoryId} />
        </>
    )
}

export default ItemListCategory;