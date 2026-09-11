import React, { useState } from "react"

function GreasedBar({ greasedOnly, setGreasedOnly }) {

    return (
        <form className="filterWrapper">
            <label htmlFor="greased-only">Greased Pigs Only?</label>
            <input type="checkbox" id="greased-only" checked={greasedOnly} onChange={(e) => setGreasedOnly(e.target.checked)}/>
        </form>
    )
}

export default GreasedBar