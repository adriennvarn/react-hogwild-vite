import React, { useState } from "react"
import Nav from "./Nav"
import HogCard from "./HogCard"
import GreasedBar from "./GreasedBar"
import SortBar from "./SortBar"
import HogForm from "./HogForm"
import { v4 as uuid } from "uuid"

import hogs from "../porkers_data"

function App() {
    const [hiddenHogs, setHiddenHogs] = useState([])
    const [greasedOnly, setGreasedOnly] = useState(false)
    const [sort, setSort] = useState("all")
    const [hogList, setHogList] = useState(hogs)

    function sortedHogs() {
        const filterGreasedHogs = (greasedOnly ? hogList.filter(hog => hog.greased) : hogList)
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
            console.error("Error in sortedHogs()")
        }
    }

    return (
        <div className="App">
            <Nav />
            <GreasedBar greasedOnly={greasedOnly} setGreasedOnly={setGreasedOnly} />
            <SortBar sort={sort} setSort={setSort} />
            <div className="ui grid container">
                {sortedHogs().map(hog => (
                    <HogCard hog={hog} key={uuid()} hideHog={(hog) => setHiddenHogs([...hiddenHogs, hog])} />
                ))}
            </div>
            <HogForm addHog={(hog) => setHogList([...hogList, hog])} />
        </div>
    )
}

export default App
