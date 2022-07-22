import React from 'react'
import CarouselFade from '../Carousel/Carousel'
import {NavLink} from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <React.Fragment>
        <div className='header-container'>
            <div className='header-carousel'>
                <CarouselFade/>
            </div>
            <div className='header-buttons'>
                <div className='header-team'>
                <NavLink to={'/Home'}><img src={"./Header-images/botCat.png"} alt="botonTeam" /></NavLink> 
                </div>
                <div className='header-donations'>
                <NavLink to={'/Home'}><img src={"./Header-images/btnDonate.png"} alt="botonTeam" /></NavLink>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Header