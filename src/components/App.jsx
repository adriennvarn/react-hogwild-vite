import React from "react"
import Nav from "./Nav"
import HogCard from "./HogCard"
import { v4 as uuid } from "uuid"

import hogs from "../porkers_data"

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="ui grid container">
                {hogs.map(hog => (
                    <HogCard hog={hog} key={uuid()} />
                ))}
            </div>
        </div>
    )
}

export default App
