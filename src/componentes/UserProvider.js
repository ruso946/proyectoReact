import React, {useState, useContext} from 'react';

const userContext = React.createContext();
const usemodificacionContenido = React.useContext();

export function usoUserContenido(){
    return userContext(userContext);
}

export function modificacionContenido(){
    return userContext(usemodificacionContenido);
}

export function userProvider(props){
    const [user,setUser] = useState(null);
    const cambioLogin = ()=>{
        if (user){
            setUser(null);
        } else {
            setUser({
                nombre: "Juan",
                mail: "juan@cac.com.ar"
            })
        }
    }


    return (
        <useContext.Provider value={user}>
            <usemodificacionContenido.Provider value={cambioLogin}>
                {props.children}
            </usemodificacionContenido.Provider>

        </useContext.Provider>
    );
}