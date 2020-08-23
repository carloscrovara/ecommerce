import React, {useState} from 'react';

export default function CartForm() {

    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);
    const [emailConfirm, setEmailConfirm] = useState(null);    

    const [sent, setSent] = useState(false);

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

    const labelStyle = {
        paddingTop: '10px'
    }
    
    return (
        <>
            <form className="needs-validation">
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label className="form-label" style={{ paddingTop: '5px'}}>Nombre</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Nombre" required onInput={onNameChange}></input>
                        </div>

                        <div className="col-sm-6">
                            <label className="form-label" style={{ paddingTop: '5px'}}>Apellido</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Apellido" required onInput={onLastNameChange}></input>
                        </div>

                        <div className="col-6">
                            <label className="form-label" style={labelStyle}>Teléfono</label>
                            <input type="number" className="form-control" id="phone" placeholder="1568983561" required onInput={onPhoneChange}></input>
                        </div>

                        <div className="col-6">
                            <label className="form-label" style={labelStyle}>Domicilio</label>
                            <input type="text" className="form-control" id="address" placeholder="Las Heras 2020 13 B" required onInput={onAddressChange}></input>
                        </div>

                        <div className="col-6">
                            <label className="form-label" style={labelStyle}>Email</label>
                            <input type="email" className="form-control" id="email" placeholder="tumail@ejemplo.com" required onInput={onEmailChange}></input>
                        </div>

                        <div className="col-6">
                            <label className="form-label" style={labelStyle}>Confirmar Email</label>
                            <input type="email" className="form-control" id="email" placeholder="tumail@ejemplo.com" required onInput={onEmailConfirmChange}></input>
                        </div>

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