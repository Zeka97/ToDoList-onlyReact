import React from 'react';
import './search.styles.scss';

const Search = ( {handleChange , placeholder , value } ) => (
        <input className="search" 
        type="text"  
        value={value}
        onChange={handleChange}
        placeholder = {placeholder} />
);

export default Search;