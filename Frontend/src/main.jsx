import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "./styles/_moviecard.scss"
import "./styles/Nav.scss"
import "./styles/main.scss"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
)
