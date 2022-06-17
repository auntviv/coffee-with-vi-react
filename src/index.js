import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Coffee } from "./components/Coffee.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Coffee />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
