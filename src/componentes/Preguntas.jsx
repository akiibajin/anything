import Pregunta from "./Pregunta"
import './Preguntas.css'
export default function Preguntas({props}){
   // console.log('las props son:', props)
    return(
        <div className='Carta'>
            {props.map((elemento,indice)=>       //siempre usar map
                <Pregunta 
                    key={indice}
                    type={elemento.type}
                    category={elemento.category}
                    respuestas={elemento.respuestas}
                    difficulty={elemento.difficulty}
                    question={elemento.question}
                    respuesta_correcta={elemento.respuesta_correcta}
                />
            )}

        </div>
    )
}
//mapea el siguiente todo