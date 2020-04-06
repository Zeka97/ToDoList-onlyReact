import React from 'react';

import './button.styles.scss';


const Button = ({ handleSubmit, ime }) => (
    <form onSubmit={handleSubmit}>
    <button type="submit">{ime}</button>
    </form>
);

export default Button;