
const Exportacionjpg = (props)=> {
      
    return(
        <div className="text-center">
            <figure>
                <p className="w-100 px-30 text-center position-absolute top-50 start-30 h1"> </p>
                <img src={`./memes/${props.nombre}.jpg`} className="figure-img img-fluid mt-3" alt="imagen Meme"/>
            </figure>            
        </div>
        
    );
}


export default Exportacionjpg;
