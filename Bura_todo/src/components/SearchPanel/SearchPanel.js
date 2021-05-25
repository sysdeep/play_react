import React from 'react';
import "./SearchPanel.css"

const SearchPanel = ({onFilterSearch}) => {

    const search_text = "search";


    return (

        <div>

            <input type="text" className="form-control search-input"

                onChange={(e) => onFilterSearch(e.target.value)}
                placeholder={search_text} />

           
        </div>
    );
}

export default SearchPanel;