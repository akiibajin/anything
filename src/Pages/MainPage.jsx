import { Link } from "react-router-dom"

export default function PaginaPrincipal(){

    return(
        <div>
            <h1>Esta es una pagina para trivias. dale al boton para comenzar</h1>
            <Link to='/game'>
            <button>Comenzar</button>
            </Link>
        </div>
    )
}