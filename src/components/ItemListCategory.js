import React from 'react';
import ItemListCategoryContainer from './ItemListCategoryContainer';
import { useParams } from "react-router-dom";

function ItemDetail() {      
    const { categoryId } = useParams();      
    return (
        <>
            <ItemListCategoryContainer categoryId={categoryId} />
        </>
    )
}

export default ItemDetail;