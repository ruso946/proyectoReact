import React, {useState} from "react";
import HijoDeTextoMeme from "./HijoDeTextoMeme";

const Txtmeme = ()=> {
    const [inputMeme,setInputMeme] = useState("inicio");
    const seleccionarTxt = (e)=>{
        setInputMeme(e.target.value);
    }

    return(
        <div className="row">
            <div className="col-4"></div>
            <div className="col-8">
                <h3 className="mt-3 mx-3">Ingresá el texto para tu meme</h3>
                <input className="m-3" type="text" onChange={seleccionarTxt} placeholder="Poné tu frase" arial-label="default input example" value={inputMeme}></input>
                <button type="button" className="btn btn-primary m-auto mt-4 mb-4">Exportar meme</button>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-8">
                    <HijoDeTextoMeme textoQueLePaso={inputMeme}/>
                </div>
            </div>
        </div>
        
    );
}


export default Txtmeme;