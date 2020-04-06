import React from 'react';

import './header.styles.scss';
import Search from '../search/search.component';
import Button from '../button/button.component';

const Header = ({handleChange, handleSubmit,  value}) => (
        <div className="todo">
            <h2 className="title">New Todo:</h2>
                        <form className="searchandbutton" onSubmit={handleSubmit} >
                            <Search placeholder="Enter text" handleChange={handleChange} value = {value} />
                            <Button handleSubmit={handleSubmit} ime={'ADD'} />
                        </form>
        </div>

);

export default Header;