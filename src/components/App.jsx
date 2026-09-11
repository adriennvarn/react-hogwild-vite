import React, { useState } from "react"
import Nav from "./Nav"
import HogCard from "./HogCard"
import FilterBar from "./FilterBar"
import { v4 as uuid } from "uuid"

import hogs from "../porkers_data"

function App() {
    const [greasedOnly, setGreasedOnly] = useState(false)
    
    const filterGreased = hogs.filter(hog => hog.greased)

    return (
        <div className="App">
            <Nav />
            <FilterBar greasedOnly={greasedOnly} setGreasedOnly={setGreasedOnly} />
            <div className="ui grid container">
                {(greasedOnly ? filterGreased : hogs).map(hog => (
                    <HogCard hog={hog} key={uuid()} />
                ))}
            </div>
        </div>
    )
}

export default App
