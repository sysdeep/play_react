import React from 'react';
import "./SearchPanel.css"

const SearchPanel = () => {

    const search_text = "search";

    return (
        <input type="text" className="form-control search-input"

            placeholder={search_text} />
    );
}

export default SearchPanel;