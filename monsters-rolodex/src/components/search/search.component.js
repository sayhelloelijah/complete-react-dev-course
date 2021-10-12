import React from "react";
import './search.css';

export const Search = ({ placeholder, handleChange}) => {
        return <input
                class="search"
                type="search"
                placeholder={ placeholder }
                onChange={ handleChange } />
}