// src/components/Input/SearchInput.jsx

import "./SearchInput.css";

function SearchInput({

    value,

    onChange,

    placeholder = "Personel Ara..."

}){

    return(

        <input

            className="search-input"

            type="text"

            value={value}

            onChange={onChange}

            placeholder={placeholder}

        />

    );

}

export default SearchInput;