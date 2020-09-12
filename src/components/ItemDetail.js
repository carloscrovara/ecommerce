import React, {useEffect} from 'react';
import ItemDetailContainer from './ItemDetailContainer';

function ItemDetail() {      

    useEffect(() => {
        console.log('Mounted ItemDetail')
        return () => {
            console.log('Dismounted ItemDetail');
        };          
    }, []);    

    return (
        <>
            <ItemDetailContainer />
        </>
    )
}

export default ItemDetail;