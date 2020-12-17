import "./styles/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
