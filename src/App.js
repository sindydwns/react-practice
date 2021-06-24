import React from "react";
import { HashRouter, Route } from "react-router-dom";
import SideNavigator from "./routers/SideNavigator";
import TodoList from "./routers/TodoList";
import About from "./routers/About";
import CoinGraph from "./routers/CoinGraph";
import MultiCoinGraph from "./routers/MultiCoinGraph";
import SubmitForm from "./routers/SubmitForm";

function App() {
    return (
        <HashRouter >
            <SideNavigator />
            <Route path="/" exact={true} component={About} />
            <Route path="/TodoList" component={TodoList} />
            <Route path="/CoinGraph" component={CoinGraph} />
            <Route path="/MultiCoinGraph" component={MultiCoinGraph} />
            <Route path="/SubmitForm" component={SubmitForm} />
        </HashRouter>
    );
}

export default App;
