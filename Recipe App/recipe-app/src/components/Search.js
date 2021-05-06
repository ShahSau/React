import React from 'react'

const Search = ({search,handleChange,handleSubmit}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-10 mx-auto col-md-8 mt-5 text-center'>
                    <h1 className='text-slanted text-capitalize'>
                        search recipes with <strong className='text-blue'> EDAMAM</strong>
                    </h1>
                    <form className='mt-4'>
                        <label htmlFor='search' className='text-slanted text-capitalize'>
                            What do you like to have today
                        </label>
                        <div className='input-group'>
                            <input 
                                type='text'
                                name='search'
                                className='form-control'
                                placeholder='chicken,onion,carrots'
                                value={search}
                                onChange={handleChange}
                            ></input>
                            <div  className='input-group-append'>
                                <button className='form-control' type='submit' onClick={handleSubmit}>
                                    <i className='fas fa-search'/>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Search



