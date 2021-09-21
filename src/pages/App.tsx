import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../containers/NavBar';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/u/:id">
            <Profile />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
