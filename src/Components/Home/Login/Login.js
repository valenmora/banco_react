import React, { Fragment , useState} from 'react';
import imagenUser from '../../../imagenes/perfilUsuario.svg'
import {Modal , Button} from 'react-bootstrap';

function  Login({history}) {

    const [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);

    const [isError, setError] = useState(false);

    const [mensaje, setMensaje] = useState();
    const [datos, setDatos ]= useState({
        usuario: '',
        contrasena: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const handleClick = () => {

            if( (datos.usuario === 'admin' && datos.contrasena === 'admin123') || 
                (datos.usuario === 'user' && datos.contrasena === 'user123') || 
                (datos.usuario === 'agent' && datos.contrasena === 'agent123') )
            {      
                setMensaje(`Bienvenido ${datos.usuario}`)
                setError(true)
            } else {
                setMensaje(`Error. Usuario o contraseña incorrecta`)
                setDatos({ usuario:'', contrasena:''})                
                setError(false)
            }
            setShow(true)
    }

    const handleOpenShow = () => {
        if(datos.usuario === 'admin'){
            history.push(`/administrador?user=${datos.usuario}`)
        } else if (datos.usuario === 'user' ){
            history.push(`/cliente?user=${datos.usuario}`)
        }else{
            history.push(`/agenteCuenta?user=${datos.usuario}`)

        }
    }
    
    return (
      
        <Fragment>
            
            <form > 

            <div className="login text-center"> 
                 <div className="row justify-content-center">
                                <div className="card-body img col-sm-6" >
                                    <img src={imagenUser}  alt="Lights" width="150"  />
                                </div>
                                <div className="card-body col-sm-8 align-selg-center" >
                                    <label for="inputEmail3" >Usuario</label>
                                </div>
                                < input
                                        className="form-control col-sm-5"
                                        placeholder="ingrese usuario"
                                        type="text"
                                        name="usuario"
                                        onChange={handleInputChange}
                                    />
                                <div className="card-body col-sm-8 align-selg-center">
                                    <label for="inputPassword3" >Password</label>
                                </div>
                                <input  
                                        className="form-control col-sm-5"
                                        placeholder="ingrese contraseña"
                                        type="password"
                                        name="contrasena"
                                        onChange={handleInputChange}
                                    />
                                <div className="card-body col-sm-8 align-selg-center"> 
                                    <Button variant="primary" onClick={handleClick}>
                                        Sign in
                                    </Button>
                                </div>
                        </div>
                    </div>
                    </form>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body> {mensaje}</Modal.Body>
                        <Modal.Footer>
                        <Button variant={isError ? "primary": "secondary"} onClick={isError ? handleOpenShow : handleClose}>
                            {isError ? 'Entrar' : 'Salir'}
                        </Button>
                        </Modal.Footer>
                    </Modal>
        </Fragment>
    );
};

export default Login;