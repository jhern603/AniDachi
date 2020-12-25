import "styles/index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "pages/About";
import Index from "pages/Index";
import Contact from "pages/Contact";
import Login from "pages/Login";
import Register from "pages/Register";
import { Navbar } from "components/Navbar";
import Posts from "pages/Posts";
// Nested routes

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route exact path="/">
            <Index />
          </Route>
          <Route component="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;