const initialState={
    preguntas:[],
    resultados:0
}

 const reducer=(state=initialState,action)=>{
    if(action.type==='GENERAR'){
        return{
            ...state,
            preguntas: action.payload
        };
    }
    if(action.type==='AUMENTAR_RESULTADO'){
        return{
            ...state,
            resultados: state.resultados + action.payload
        }
    }
    return state;
}

export default reducer;