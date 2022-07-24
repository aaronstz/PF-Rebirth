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
            <div class = "logo-ld">
                <img src = {logo} alt = "Rebirth" />
            </div>
            <div class ="title-ld">
                <h2>A   NEW   LIFE   OPPORTUNITY </h2>
            </div>
            <Link to ='/home'>
                <div class ="pet-ld">
                        <img src = {dog} alt ="Dog Team" />
                        <img src = {cat} alt ="Cat Team" />
                </div>
            </Link>
            <div class ="sub-ld">
                <br/>
                    <h3>PLEASE   CHOOSE   YOUR   TEAM</h3>
            </div>
        </div>
        </body>
    )
}