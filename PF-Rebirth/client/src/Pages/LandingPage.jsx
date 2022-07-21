import { Link } from 'react-router-dom'

export default function LandingPage(){

    console.log('funciona')
    return(

        <div>
            <h1>Hola soy la Landing ;)</h1>
            <Link to ='/home'>
                <button>Enter</button>
            </Link>
        </div>
    )
}