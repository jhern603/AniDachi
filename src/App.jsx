import 'styles/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Register, About, Contact, Posts, Login } from 'pages';
import { Navbar } from 'components/Navbar';

//TODO: To connect front-end to back-end, just make an HTTP request from the front-end that the backend will pick up and return the appropriate values for

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
            <Home />
          </Route>
          <Route component="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
