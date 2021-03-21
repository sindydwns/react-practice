import React from "react"
import { Link } from "react-router-dom";
import "./TopNavigator.css"

function Navigator(){
    return (
        <div className="Navigator">
            <Link to="/">About</Link>
            <Link to="/TodoList">TodoList</Link>
            <Link to="/CoinGraph">CoinGraph</Link>
            <Link to="/SubmitForm">SubmitForm</Link>
        </div>
    )
}

export default Navigator;