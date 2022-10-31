// import html2canvas from 'html2canvas';
import React, {useState} from 'react'
import Imgmeme from "./componentes/Imgmeme";
import Txtmeme from "./componentes/Textomeme";
import UserProvider from "components/UserProvider";

const App = ()=>{
    return (
        <UserProvider>
            <div className="App">
                <Hijo/>
                <Imgmeme/>
                <Txtmeme/> 
                
            </div>
        </UserProvider>
    )
}

export default App;