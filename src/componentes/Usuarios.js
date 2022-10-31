// function Usuarios(props){
//     return (
//       <div className='m-2' style={{backgroundColor: props.color}}>
//         <h3>Nombre: {props.nombre}</h3>
//         <p>Edad: {props.edad}</p>
//       </div>
//     );
//   };

// export default Usuarios;

let Usuarios= (props)=>
    <div className='m-2' style={{backgroundColor: props.color}}>
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
    </div>
  
export default Usuarios;