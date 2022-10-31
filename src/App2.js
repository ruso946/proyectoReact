// import logo from './logo.svg';
import './App.css';
import Usuarios from './componentes/Usuarios.js';
import Contapp from './componentes/Cont.js';

// function Usuarios(props){
//   return (
//     <div className='m-2' style={{backgroundColor: props.color}}>
//       <h3>Nombre: {props.nombre}</h3>
//       <p>Edad: {props.edad}</p>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div className="App carlos m-auto">
//       <h1 className="text-center text-light">Hola mundo</h1>
//       <Usuarios nombre="Gisela" edad="30" color="red" />
//       <Usuarios nombre="Juan" edad="50" color="green" />
//     </div>
//   );
// }

// export default App;

let App2 = ()=>
    <div className="App carlos m-auto">
      <h1 className="text-center text-light">Hola mundo</h1>
      <Usuarios nombre="Gisela" edad="30" color="red" />
      <Usuarios nombre="Juan" edad="50" color="green" />
      <Usuarios nombre="Pedro" edad="70" color="yellow" />
      <Contapp/>
    </div>

export default App2;
<Contapp/>