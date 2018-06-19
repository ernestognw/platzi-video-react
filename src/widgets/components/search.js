import React from 'react';
import './search.css'

// function Search(props) {
//     return (

//     )
// }

const Search = (props) => (
    <form 
        action="" 
        className="Search"
        onSubmit ={props.handleSubmit}
    >
        <input 
            ref={props.setRef}
            type="text"
            placeholder="Busca tu video favorito" 
            name="search" 
            id=""
            className="Search-input"
            onChange={props.handleChange}
            value={props.value}
        />
    </form>
)

export default Search;