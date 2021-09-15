import { Aumentar } from "../Redux/Action/Action.jsx"
import { connect } from "react-redux"
import './Pregunta.css'


function Desordenar(arr){ 
    let i,j,k;
    for (i = arr.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = k;
    }
    return arr;
}
export function Pregunta({type,category,respuestas,respuesta_correcta,question,difficulty,Aumentar,resultados}){
    let newA=[]
    newA=Desordenar(respuestas)
    const Verificar=(evento)=>{
        //console.log(evento.target.value)
        if(evento.target.value===respuesta_correcta){
            alert('felicidades, respuesta correcta');
            Aumentar();
        }
    }
    console.log(respuesta_correcta)
    return(
        <div className='contenido-pregunta'>
            <h1>{question}</h1>
            <h3>{category}</h3>
            <h4>{type}</h4>
            <h5>{difficulty}</h5>
            {newA.map(elemento=>
            <button className='boton' key={elemento} value={elemento} onClick={Verificar}>{elemento}</button>
                )}
            <p>{`Cantidad de Respuestas Acertadas: ${resultados}`}</p>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        Aumentar: ()=>dispatch(Aumentar())
    }
}
const mapStateToProps=(state)=>{
    return{
        resultados: state.resultados
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Pregunta)