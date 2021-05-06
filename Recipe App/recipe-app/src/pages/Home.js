import React from 'react'
import Header from '../components/Header'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <Header title='feeling hungry'>
            <Link to='/recipes' className='text-uppercase btn btn-secondary btn-lg mt-3'>
                Search recipes
            </Link>
        </Header>
    )
}
export default Home