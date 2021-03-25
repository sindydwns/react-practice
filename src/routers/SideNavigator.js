import React from "react"
import { Link } from "react-router-dom";
import menuStyle from "./SideNavigator.module.css"

function Navigator(){
    return (
        <div className={menuStyle.menu}>
            <Link to="/">About</Link>
            <Link to="/TodoList">TodoList</Link>
            <Link to="/CoinGraph">CoinGraph</Link>
            <Link to="/MultiCoinGraph">MultiCoinGraph</Link>
            <Link to="/SubmitForm">SubmitForm</Link>
        </div>
    )
}

export default Navigator;