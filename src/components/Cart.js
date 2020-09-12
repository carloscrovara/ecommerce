import React, {useState}  from 'react';
import CartBrief from './CartBrief';
import {Link } from 'react-router-dom';
import {useListContext} from '../context/CartContext';
import {getFirestore} from '..//firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

function FieldForm({inputLabel, nameField, style, type, id, placeholder, valueInput, onChange}) {
    return (
        <>
            <div className="col-sm-6">
                <label htmlFor={inputLabel} className="form-label" style={style}>{nameField}</label>
                <input type={type} value={valueInput} className="form-control" id={id} placeholder={placeholder} required onChange={onChange}></input>
            </div>
        </>
    )
}

function Cart() {
    const { quantity, list, cleanList, totalPrice } = useListContext();   
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState(''); 
    const [comentarioPedido, setComentarioPedido] = useState('');   
    const [orderId, setOrderId] = useState(null);
    const [sent, setSent] = useState(false);
    const [errorEmail, setEmailError] = useState(false);

    const labelStyle = {
        paddingTop: '10px'
    }    

    function onNameChange(event) {setName(event.target.value)}
    function onPhoneChange(event) {setPhone(event.target.value)}  
    function onEmailChange(event) {setEmail(event.target.value)}
    function onEmailConfirmChange(event) {setEmailConfirm(event.target.value)}
    function onComentarioPedidoChange(event) {setComentarioPedido(event.target.value)}

    //Prueba de validación de email
    function validateEmail() {
        if(email !== emailConfirm) {
            //console.log('El mail no es el mismo');
            setEmailError(true);
        }else {
            console.log('El mail está OK');
        }
    }
    
    async function createOrder() {
        setSent(true);
        //Creo mis objetos buyer e items
        const buyer = { name, phone, email, comentarioPedido}
        const items = list.map( i => ({ id: i.id, name: i.name, quantity: i.itemQuantity, subtotalPrice: i.price * i.itemQuantity }) )
        //Creo nueva orden en colección de Firestore
        const db = getFirestore();
        const orders = db.collection('orders');
        const newOrder = { buyer, items, date: firebase.firestore.Timestamp.fromDate(new Date()), totalPrice, estadoOrder: 'generada'}
        //Obtengo el ID de la order
        try {
        const {id} = await orders.add(newOrder);
        setOrderId(id); //Success
        cleanList();
        } catch(err) {
            console.log('Error'); //Error
        }
    }    

    if(orderId) {
        return <>
                <div className="container">
                    <div className="py-5 text-center">
                        <h2>Compra realizada exitosamente.<br/>El ID de tu orden es {orderId}</h2>
                        <Link className="btn btn-success" to={`/`} style={{ marginBottom: '5px', marginTop: '25px'}}>Volver a Home</Link>                        
                    </div>
                </div>   
        </>
    }

    return quantity === 0 ? <>
                <div className="container">
                    <div className="py-5 text-center">
                        <h2>Tu carrito de compras <ion-icon name="cart" style={{ fontSize: 25 }}></ion-icon> está vacío.</h2>
                        <Link className="btn btn-success" to={`/`} style={{ marginBottom: '5px', marginTop: '25px'}}>Volver a Home para comprar</Link>                        
                    </div>
                </div>
            </> 
            :
            <>
            <div className="container">
                <div className="py-5 text-center">
                    <h2>Checkout</h2>
                    <p className="lead"> Chequéa tu pedido y completá el formulario con tus datos para confirmar la compra.</p>
                </div>
                <div className="row g-3">
                    <CartBrief />
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Completá tus datos</h4>
                        <form>
                            <div className="row g-3">
                                <FieldForm inputLabel="inputName" nameField="Nombre y Apellido" valueInput={name} style={{ paddingTop: '5px'}} type="text" id="name" placeholder="Nombre y Apellido" onChange={onNameChange}/>
                                <FieldForm inputLabel="inputPhone" nameField="Teléfono" valueInput={phone} style={labelStyle} type="number" id="phone" placeholder="1568983561" onChange={onPhoneChange}/>                                               
                                <FieldForm inputLabel="inputEmail" nameField="Email" valueInput={email} style={labelStyle} type="email" id="email" placeholder="tumail@ejemplo.com" onChange={onEmailChange}/>
                                <FieldForm inputLabel="inputConfirmEmail" nameField="Confirmar Email" valueInput={emailConfirm} style={labelStyle} type="email" id="emailconfirm" placeholder="tumail@ejemplo.com" onChange={onEmailConfirmChange}/>                                  
                                {errorEmail && <div className="alert alert-danger alert-dismissible fade show" style={{ marginTop: '15px' }} role="alert">
                                    El email debe coincidir en los campos "Email" y "Confirmar Email".
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>}  
                                <div className="col-12">
                                    <label className="form-label" style={labelStyle}>Comentario sobre el pedido<span className="text-muted"> (Opcional)</span></label>
                                    <textarea rows="2" className="col-12 form-control" value={comentarioPedido} id="comment" placeholder='Escribe tu comentario sobre el pedido.' onChange={onComentarioPedidoChange}/> 
                                </div>                        
                            </div>                                              
                            <hr className="my-4"></hr>
                            <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={ !name || !phone || !email || !emailConfirm || sent } onClick={createOrder} style={{ marginBottom: '30px'}}>
                                Realizar compra
                            </button>
                        </form>        
                    </div>
                </div>
            </div>                        
        </>
}

export default Cart;