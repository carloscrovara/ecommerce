import React, {useState} from 'react';
import { useListContext } from '../context/CartContext';
import { getFirestore } from '..//firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

function FieldForm({inputLabel, nameField, style, type, id, placeholder, onChange}) {
    return (
        <>
            <div className="col-sm-6">
                <label htmlFor={inputLabel} className="form-label" style={style}>{nameField}</label>
                <input 
                    type={type} 
                    className="form-control" 
                    id={id} 
                    placeholder={placeholder} 
                    required 
                    onInput={onChange}
                ></input>
            </div>
        </>
    )
}

export default function CartForm() {

    const {list, totalPrice} = useListContext();

    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [emailConfirm, setEmailConfirm] = useState(null); 
    const [comentarioPedido, setComentarioPedido] = useState(null);    

    const [sent, setSent] = useState(false);

    const labelStyle = {
        paddingTop: '10px'
    }    

    function onNameChange(event) {
        setName(event.target.value)
    }

    function onPhoneChange(event) {
        setPhone(event.target.value)
    }  

    function onEmailChange(event) {
        setEmail(event.target.value)
    }

    function onEmailConfirmChange(event) {
        setEmailConfirm(event.target.value)
    }   

    function onComentarioPedidoChange(event) {
        setComentarioPedido(event.target.value)
    }   

    async function createOrder() {
        setSent(true);

        //creo mis objetos buyers e items
        const buyer = {
            name,
            phone,
            email,
            comentarioPedido,
        }
        const items = list.map( i => ({ id: i.id, name: i.name, quantity: i.itemQuantity, subtotalPrice: i.price * i.itemQuantity }) )

        //creo nueva orden en colección de Firestore
        const db = getFirestore();
        const orders = db.collection('orders');
        const newOrder = {
            buyer, 
            items,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            totalPrice,
            estadoOrder: 'generada',
        }

        //Obtengo el ID de la order
        try {
        const {id} = await orders.add(newOrder);
        alert("Compra realizada exitosamente. El ID de tu orden es " + id);
        } catch(err) {
            //seteamos feedback para el user
            console.log('Error');
        }
    }
    
    return (
        <>
            <form>
                <div className="row g-3">
                    <FieldForm
                        inputLabel="inputName"
                        nameField="Nombre y Apellido"
                        style={{ paddingTop: '5px'}}
                        type="text"
                        id="name"
                        placeholder="Nombre y Apellido"
                        onChange={onNameChange}
                    ></FieldForm>
                    <FieldForm
                        inputLabel="inputPhone"
                        nameField="Teléfono"
                        style={labelStyle}
                        type="number"
                        id="phone"
                        placeholder="1568983561"
                        onChange={onPhoneChange}
                    ></FieldForm>                                                  
                    <FieldForm
                        inputLabel="inputEmail"
                        nameField="Email"
                        style={labelStyle}
                        type="email"
                        id="email"
                        placeholder="tumail@ejemplo.com"
                        onChange={onEmailChange}
                    ></FieldForm> 
                    <FieldForm
                        inputLabel="inputConfirmEmail"
                        nameField="Confirmar Email"
                        style={labelStyle}
                        type="email"
                        id="emailconfirm"
                        placeholder="tumail@ejemplo.com"
                        onChange={onEmailConfirmChange}
                    ></FieldForm>                                        
                    <div className="col-12">
                        <label className="form-label" style={labelStyle}>Comentario sobre el pedido<span className="text-muted"> (Opcional)</span></label>
                        <textarea rows="2" className="col-12 form-control" id="comment" placeholder='Escribe tu comentario sobre el pedido.' onChange={onComentarioPedidoChange}/> 
                    </div>                        
                </div>                                              

                <hr className="my-4"></hr>

                <button 
                    className="btn btn-primary btn-lg btn-block" 
                    type="submit" 
                    disabled={ !name || !phone || !email || !emailConfirm || sent } 
                    onClick={createOrder}
                    style={{ marginBottom: '30px'}}
                >
                    Realizar compra
                </button>
            </form>            
        </>
    )
}