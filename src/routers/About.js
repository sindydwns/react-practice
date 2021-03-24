import React from "react";
import menuStyle from "./SideNavigator.module.css";

function Home(){
    return (
        <div className={menuStyle.main}>
            <h1>This is my React page</h1>
            <img src={process.env.PUBLIC_URL + "/favicon.ico"} alt="react icon"/>
            <img src={process.env.PUBLIC_URL + "/favicon.ico"} alt="react icon"/>
            <img src={process.env.PUBLIC_URL + "/favicon.ico"} alt="react icon"/>
        </div>
    )
}

export default Home;