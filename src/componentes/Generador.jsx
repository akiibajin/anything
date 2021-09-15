import { Generar,Aumentar } from "../Redux/Action/Action.jsx"
import {connect} from 'react-redux'
import Preguntas from "./Preguntas.jsx"

 function Generador({Generar,preguntas,Aumentar}){

    const cuandoClickea=(elemento)=>{
        elemento.preventDefault()
        //console.log(elemento.target[0].value,elemento.target[1].value)
        Generar(elemento.target[0].value,elemento.target[1].value)
    }
    // console.log('las preguntas son:',preguntas)
    return(
        <div>
            <form onSubmit={cuandoClickea}>
            <h1>Aca se generan el juego</h1>
            <select id='cantidad'>
                <option value={1}>cantidad 1</option>
                <option value={2}>cantidad 2</option>
            </select>
            <select id='categoria'>
                <option value={9}>General</option>
                <option value={10}>Libros</option>
            </select>
            <button type='submit'>Jugar</button>
            </form>
            <button>Resultados</button>
            <Preguntas props={preguntas}/>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        preguntas: state.preguntas
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
      Generar: (param1,param2)=> dispatch(Generar(param1,param2)),
      Aumentar: ()=>dispatch(Aumentar())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Generador)