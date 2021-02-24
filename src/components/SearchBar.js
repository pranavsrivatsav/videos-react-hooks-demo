import React, { useState } from 'react'

const SearchBar = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        onSearchSubmit(term)
    }

    return (
        <div className="ui search-bar segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Search for a Video</label>
                    <input
                        type="text"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )

}

export default SearchBar