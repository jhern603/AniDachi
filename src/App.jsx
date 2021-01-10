import 'styles/index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Register, About, Contact, Posts, Login } from 'pages';
import { Navbar } from 'components/Navbar';
import { useAuth0 } from '@auth0/auth0-react';
import { Loading } from 'api/PostAPI';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
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
  );
};
export default App;
