import {Link} from 'react-router-dom'
import './NavBar.css'
export default function Navegacion(){


    return(
        <div className='navegador'>
            <nav>
            <Link to='/'>
                <button id='boton'>inicio</button>
            </Link>
            </nav>
        </div>
    )
}
