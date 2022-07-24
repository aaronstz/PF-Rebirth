import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


function About() {

    const dispatch = useDispatch()


  return (
    <div>
        <h1>About us:</h1>
        <h3>etc, etc...</h3>
        <Link to ='/home'>
            <button>Home</button>
        </Link>
    </div>
  )
}

export default About