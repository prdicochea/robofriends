import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return(
        <div  className='pa3 tc fl-w100 '>
            <input 
            className = 'pa3 ba b--green bg-lightest-blue'
            type = 'search' 
            placeholder='search robots'
            onChange={searchChange} 
            />    
        </div>
    );
}

export default SearchBox