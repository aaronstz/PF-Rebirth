import { Link } from "react-router-dom";
import Footer from '../Components/Footer/Footer'
import logo from '../Assets/logoLanding.png';
import cat from '../Assets/catTeam.png';
import dog from '../Assets/dogTeam.png';
import './LandingPage.css'
import { getTypes } from '../Redux/Actions/index'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function LandingPage(){

    const dispatch = useDispatch()
    const navigate = useNavigate()


    function handleClick(e){
        e.preventDefault()
        dispatch(getTypes(e.target.value))
        navigate('/home')
    }



    return(
        <body>
        <div class ="container">
            <div class = "logo-ld">
                <img src = {logo} alt = "Rebirth" />
            </div>
            <div class ="title-ld">
                <h2>A   NEW   LIFE   OPPORTUNITY </h2>
            </div>
            <div class ="pet-ld">
                        <div>
                            <button value = "dog" onClick={(e)=>handleClick(e)}>
                                <img  src = {dog} alt ="Dog Team" />
                            </button>
                            <button value = "cat" onClick={(e)=>handleClick(e)} >
                            <img src = {cat} alt ="Cat Team" />
                            </button>

                        </div>
            </div>
            <div class ="sub-ld">
                <br/>
                    <h3>PLEASE   CHOOSE   YOUR   TEAM</h3>
            </div>
        </div>
        </body>
    )
}
