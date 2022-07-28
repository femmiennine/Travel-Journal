import React from "react"
import Cards from "./components/Cards"
import Header from "./components/Header"
import data from "./data"

function App() {
    const journal = data.map(function(item) {
        return (
            <Cards
                key={item.id}
                {...item}
            />
        )    
    }) 
    
    return (
        <div className="container">
            <Header />
            {journal}
        </div>
    ) 
}

export default App
