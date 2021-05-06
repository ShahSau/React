import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
const Error= ()=> {
    return (
        <Header title='404' styleClass='default-hero'> 
            <h2 className='text-light text-uppercase'> 
                You are in the wrong page
            </h2>
            <Link to='/' className='text-uppercase btn btn-secondary btn-lg mt-3'>
                Return home
            </Link>
        </Header>
    )
}

export default Error





