import React, {useState} from 'react';
import BotonSuma from './Boton';

const Contapp = ()=> {
    
    let [contador, setContador] = useState(0);
    
    const restarApp = () => {
        setContador(contador-1);
    }
    return (
        <div className="mt-5">
            <BotonSuma nroPasadoSuma={contador}/>
            <button onClick={restarApp}>
                Restar click
            </button>
            <h3>Clicks: {contador}</h3>

        </div>       
    );
};

export default Contapp;