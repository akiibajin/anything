

export const Generar=(cantidad,categoria)=>{
    return function(dispatch){
        return fetch(`https://opentdb.com/api.php?amount=${cantidad}&category=${categoria}`)
        .then(resultado =>resultado.json())
        .then(resuTransformado=>{
            let contenedor=[]
            resuTransformado.results.forEach(elemento=>{
                contenedor.push({
                    category:elemento.category,
                    type:elemento.type,
                    difficulty:elemento.difficulty,
                    question:elemento.question,
                    respuestas: elemento.incorrect_answers.concat(elemento.correct_answer),
                    respuesta_correcta: elemento.correct_answer
                });
            });
            dispatch({type:'GENERAR',payload:contenedor})
        });
    }
}

export const Aumentar=()=>{
    return ({type:'AUMENTAR_RESULTADO',payload:1})
} 