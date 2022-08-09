import NavBar from '../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Admin(){

    const profile = useSelector((state) => state.profileView);
    const infoStorage = localStorage.getItem("user");
    const user =
    Object.keys(profile).length !== 0 ? profile : JSON.parse(infoStorage);


    return(
        <div>
            <NavBar/>
            <div className="row d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center text-center p-3 py-2">
            <h1 class="mt-5 text-center">Admin</h1>
                </div>
                </div>
                <div>
                    <Link to={'/'}><button>a</button></Link>
                </div>
                <div>
                    <Link to={'/'}><button>b</button></Link>
                </div>
                <div>
                    <Link to={'/'}><button>c</button></Link>
                </div>

        </div>
    )
}