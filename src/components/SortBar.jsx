import React, { useState } from "react"

function SortBar({sort, setSort}) {
    return (
        <form className="filterWrapper">
            <label htmlFor="dropdown">Sort by:</label>
            <select id="dropdown" name="dropdown" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="all">All</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </form>
    )
}

export default SortBar