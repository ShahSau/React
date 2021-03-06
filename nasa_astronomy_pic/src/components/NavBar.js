import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/">Take us Home</Link>
            </ul>
        </div>
    )
}

export default NavBar