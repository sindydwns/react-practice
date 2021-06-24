import React, { useRef } from "react"
import { Link } from "react-router-dom";
import menuStyle from "./SideNavigator.module.css"

function SideNavigator() {

    const maxWidth = 300;
    const ref = useRef();

    const closeMenu = () => ref.current.style.width = 0;
    const openMenu = () => ref.current.style.width = maxWidth + "px";

    return (
        <>
            <div className={menuStyle.top}>
                <div onClick={openMenu}>Menu</div>
            </div>
            <div ref={ref} className={menuStyle.menu} style={{ width: 0 }}>
                <Link to="/" onClick={closeMenu}>About</Link>
                <Link to="/TodoList" onClick={closeMenu}>TodoList</Link>
                <Link to="/CoinGraph" onClick={closeMenu}>CoinGraph</Link>
                <Link to="/MultiCoinGraph" onClick={closeMenu}>MultiCoinGraph</Link>
                <Link to="/SubmitForm" onClick={closeMenu}>SubmitForm</Link>
            </div>
        </>
    )
}

export default SideNavigator;