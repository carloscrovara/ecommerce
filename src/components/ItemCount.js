import React, {useState} from 'react';

function ItemCount({ initial, min, max, onAdd }) {
    const [value, setValue] = useState(initial);

    function sumar() {
        if(value < `${max}`){
        setValue(value + 1);
        }else{
            console.log('Máximo alcanzado');
        }
    }

    function restar() {
        if(value > `${min}`){
        setValue(value - 1);
        }else{
        console.log('Mínimo alcanzado');
        }        
    }

    function onValueChange(event) {
        setValue(event.target.value)
    }    

    return (
        <>
            <>
                <div className="section text-center" style={{ paddingBottom: '20px'}}>
                    <h6 className="title-attr"><small>Cantidad</small></h6>
                    <div className="row" style={{ display: 'flex', justifyContent: "center"}}>  
                        <button type="button" className="btn btn-light" onClick={restar}><ion-icon name="remove-outline"></ion-icon></button>
                        <input type="number" className="form-control text-center" style={{ width: "60px"}} value={value} onChange={onValueChange}/>
                        <button type="button" className="btn btn-light" onClick={sumar}><ion-icon name="add-outline"></ion-icon></button>
                    </div>
                    <hr />
                    <div className="section" style={{ paddingBottom: '20px', paddingTop: '20px' }}>
                        <button className="btn btn-success" onClick={onAdd}>
                            <ion-icon name="cart" style={{ marginRight: '20px' }} aria-hidden="true"></ion-icon> 
                            Comprar {value}
                        </button> 
                    </div>
                </div>
            </> 
        </>
    )
}

export default ItemCount;