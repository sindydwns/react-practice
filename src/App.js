import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import TopNavigator from "./routers/TopNavigator";
import TodoList from "./routers/TodoList";
import About from "./routers/About";
import CoinGraph from "./routers/CoinGraph";
import SubmitForm from "./routers/SubmitForm";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <TopNavigator />
      <Route path="/" exact={true} component={About} />
      <Route path="/TodoList" component={TodoList} />
      <Route path="/CoinGraph" component={CoinGraph} />
      <Route path="/SubmitForm" component={SubmitForm} />
    </BrowserRouter>
  );
}

export default App;
