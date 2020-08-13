import React from 'react';

function Footer() {
    const containerStyle = {
        paddingTop:'20px', 
        paddingBottom:'5px'
    }
    const iconFooter = {
        fontSize: 25, 
        paddingRight: '8px',
    }

    return (
        <>
            <footer className="bg-dark text-white-50">
                <div className="container text-center" style={containerStyle}>
                        <div className="float-right">
                            <a className="text-white-50" href="https://instagram.com/tortasugita" target="_blank" rel="noopener noreferrer">
                                <ion-icon name="logo-instagram" style={iconFooter} ></ion-icon> 
                            </a>                          
                        </div>
                        <p>Copyright &copy; 2020. Tortas Ugita</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;