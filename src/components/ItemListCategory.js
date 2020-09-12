import React, {useEffect} from 'react';
import ItemListCategoryContainer from './ItemListCategoryContainer';

function ItemListCategory() {      

    useEffect(() => {
        console.log('Mounted ItemListCategory')
        return () => {
            console.log('Dismounted ItemListCategory');
        };       
    }, []);  
    
    return (
        <>
            <ItemListCategoryContainer />
        </>
    )
}

export default ItemListCategory;