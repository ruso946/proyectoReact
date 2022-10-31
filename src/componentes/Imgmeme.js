import React, {useState} from "react";
import Exportacionjpg from "./Exportacionjpg";

const Imgmeme = ()=> {

    const [imgmemes, setImgmemes] = useState("1");

    const seleccionarImg = (e)=>{
        setImgmemes(e.target.value);
    }

    return(
        <div className="text-center">
            <h1 className="mt-3 text-center">Edita tu meme</h1>
            <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-25 m-auto" defaultValue={1}>
                <option value={1}>Futurama 1</option>
                <option value={2}>fututama 2 Robot</option>
                <option value={3}>Futurama 3 Todos</option>
                <option value={4}>Futurama 4 dos personajes</option>
            </select>
            <Exportacionjpg nombre={imgmemes}/>
        </div>
        
    );
}


export default Imgmeme;