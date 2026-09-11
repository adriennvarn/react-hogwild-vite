import React, { useState } from "react"

function HogCard({ hog, hideHog }) {
    const [detailsShown, setDetailsShown] = useState(false)
    const [hogHidden, setHogHidden] = useState(false)

    function handleClick() {
        setDetailsShown(!detailsShown)
    }

    function handleHideButton() {
        setHogHidden(!hogHidden)
        hideHog(hog)
    }

    return (
        <div aria-label="hog card" className="pigTile card ui eight wide column" onClick={handleClick} style={{ display: hogHidden ? "none" : "parent" }}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={`Photo of ${hog.name}`} />
            {detailsShown && (<>
                <p>Specialty: {hog.specialty}</p>
                <p>{hog.weight}</p>
                <p><strong>Greased: </strong>{hog.greased ? "Greased" : "Nongreased"}</p>
                <p><strong>Highest medal achieved: </strong>{hog["highest medal achieved"]}</p>
            </>)}
            <button onClick={handleHideButton}>Hide Me</button>
        </div>
    )
}

export default HogCard