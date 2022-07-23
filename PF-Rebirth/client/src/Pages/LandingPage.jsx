import { Link } from "react-router-dom";
import Footer from '../Components/Footer/Footer'
import logo from '../Assets/logoLanding.png';
import cat from '../Assets/catTeam.png';
import dog from '../Assets/dogTeam.png';
import './LandingPage.css'


export default function LandingPage(){

    return(
        <body>
        <div class ="container">
            <img src = {logo} alt = "Rebirth" class = "logo-ld"/>
            <div class ="title-ld">
            <h2>A NEW LIFE OPPORTUNITY</h2>
            </div>
            <Link to ='/home'>
            <img src = {dog} alt ="Dog Team" class ="pet-ld"/>
            <img src = {cat} alt ="Cat Team" class ="pet-ld"/>
            </Link>
            <div class ="sub-ld">
            <br/>
            <h3>PLEASE CHOOSE YOUR TEAM</h3>
            </div>

        </div>
        </body>
    )
}
