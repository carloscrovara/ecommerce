import React, {useState} from 'react';


function FieldForm({nameField, style, type, id, placeholder, onChange}) {
    return (
        <>
            <div className="col-sm-6">
                <label className="form-label" style={style}>{nameField}</label>
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

    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [emailConfirm, setEmailConfirm] = useState(null);    

    const [sent, setSent] = useState(false);

    const labelStyle = {
        paddingTop: '10px'
    }    

    function onNameChange(event) {
        setName(event.target.value)
    }

    function onLastNameChange(event) {
        setLastName(event.target.value)
    }
    
    function onPhoneChange(event) {
        setPhone(event.target.value)
    }  
    
    function onAddressChange(event) {
        setAddress(event.target.value)
    }

    function onEmailChange(event) {
        setEmail(event.target.value)
    }

    function onEmailConfirmChange(event) {
        setEmailConfirm(event.target.value)
    }    

    function send() {
        setSent(true);
        console.log('La compra se realizó con éxito.')
    }
    
    return (
        <>
            <form>
                <div className="row g-3">
                    <FieldForm
                        nameField="Nombre"
                        style={{ paddingTop: '5px'}}
                        type="text"
                        id="firstName"
                        placeholder="Nombre"
                        onChange={onNameChange}
                    ></FieldForm>
                    <FieldForm
                        nameField="Apellido"
                        style={{ paddingTop: '5px'}}
                        type="text"
                        id="lastName"
                        placeholder="Apellido"
                        onChange={onLastNameChange}
                    ></FieldForm>
                    <FieldForm
                        nameField="Teléfono"
                        style={labelStyle}
                        type="number"
                        id="phone"
                        placeholder="1568983561"
                        onChange={onPhoneChange}
                    ></FieldForm>                                                  
                    <FieldForm
                        nameField="Domicilio"
                        style={labelStyle}
                        type="text"
                        id="address"
                        placeholder="Las Heras 2020 13 B"
                        onChange={onAddressChange}
                    ></FieldForm>
                    <FieldForm
                        nameField="Email"
                        style={labelStyle}
                        type="email"
                        id="email"
                        placeholder="tumail@ejemplo.com"
                        onChange={onEmailChange}
                    ></FieldForm> 
                    <FieldForm
                        nameField="Confirmar Email"
                        style={labelStyle}
                        type="email"
                        id="emailconfirm"
                        placeholder="tumail@ejemplo.com"
                        onChange={onEmailConfirmChange}
                    ></FieldForm>                                        
                    <div className="col-12">
                        <label className="form-label" style={labelStyle}>Comentario sobre el pedido<span className="text-muted"> (Opcional)</span></label>
                        <textarea rows="2" className="col-12 form-control" id="comment" placeholder='Escribe tu comentario sobre el pedido.'/> 
                    </div>                        
                </div>                                              

                <hr className="my-4"></hr>

                <button 
                    className="btn btn-primary btn-lg btn-block" 
                    type="submit" 
                    disabled={ !name || !lastName || !phone || !address || !email || !emailConfirm || sent } 
                    onClick={send}
                    style={{ marginBottom: '30px'}}
                >
                    Realizar compra
                </button>
            </form>            
        </>
    )
}