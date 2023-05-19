import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Start from "./components/Start/Start";
import Detail from "./components/Detail/Detail";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/">
          <Cards />
        </Route>
        <Route exact path="/product/:id">
          <Detail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
