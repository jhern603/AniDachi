import "./styles/index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
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

          <Route path="/register">
            <Register />
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
