import React, { useState } from "react"
import Nav from "./Nav"
import HogCard from "./HogCard"
import GreasedBar from "./GreasedBar"
import SortBar from "./SortBar"
import { v4 as uuid } from "uuid"

import hogs from "../porkers_data"

function App() {
    const [hiddenHogs, setHiddenHogs] = useState([])
    const [greasedOnly, setGreasedOnly] = useState(false)
    const [sort, setSort] = useState("all")

    function sortedHogs() {
        const filterGreasedHogs = (greasedOnly ? hogs.filter(hog => hog.greased) : hogs)
        const filterHiddenHogs = filterGreasedHogs.filter(hog => !hiddenHogs.includes(hog))
        if (sort === "all") {
            return filterHiddenHogs
        }
        else if (sort === "name") {
            return filterHiddenHogs.toSorted((a, b) => a.name.localeCompare(b.name))
        }
        else if (sort === "weight") {
            return filterHiddenHogs.toSorted((a, b) => a.weight - b.weight)
        }
        else {
            console.log("Error in sortedHogs()")
        }
    }

    function hideHog(hog) {
        setHiddenHogs([...hiddenHogs, hog])
    }

    return (
        <div className="App">
            <Nav />
            <GreasedBar greasedOnly={greasedOnly} setGreasedOnly={setGreasedOnly} />
            <SortBar sort={sort} setSort={setSort} />
            <div className="ui grid container">
                {sortedHogs().map(hog => (
                    <HogCard hog={hog} key={uuid()} hideHog={(hog) => hideHog(hog)} />
                ))}
            </div>
        </div>
    )
}

export default App
