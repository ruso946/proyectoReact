import React, {useState} from 'react';

const BotonSuma = ()=>{
    let [nroPasadoSuma,manejaBotonSuma] = useState(0);

    const sumarUno = ()=>{
        manejaBotonSuma(nroPasadoSuma+1);
    }
    
    return(
        <button onClick={sumarUno}>
                    Sumar click
                </button>
        );
}

export default BotonSuma;