import React, { useState } from "react"

function HogForm({ addHog }) {

    const [hogData, setHogData] = useState({
        name: "",
        weight: 0.0,
        specialty: "",
        greased: false,
        image: "",
        "highest medal achieved": ""
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setHogData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addHog(hogData)
    }

    return (
        <form onSubmit={handleSubmit} className="filterWrapper">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={hogData.name} onChange={handleChange}/>

            <label htmlFor="weight">Weight:</label>
            <input type="text" id="weight" name="weight" value={hogData.weight} onChange={handleChange}/>

            <label htmlFor="specialty">Specialty:</label>
            <input type="text" id="specialty" name="specialty" value={hogData.specialty} onChange={handleChange}/>

            <label htmlFor="greased">Greased?</label>
            <input type="checkbox" id="greased" name="greased" value={hogData.greased} onChange={handleChange}/>

            <button type="submit">Add Hog</button>
        </form>
    )
}

export default HogForm