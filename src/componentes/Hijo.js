import {button} from 'react-bootstrap';
import {usoUserContenido, modificacionContenido} from './UserProvider';

const Hijo = () =>{
    const user = usoUserContenido();
    const cambioLogin = modificacionContenido();


    return (
        <div>
        <h2>Hola ususario, esto es un componente hijo</h2>
        {user && <p>Hola {user.nombre}</p>}
        <button onClick={cambioLogin} type="button">guardar cambios</button>
        </div>
    );

}

export default Hijo;