import './App.css';
import StartPage from './components/StartPage'
import Create from './components/Create';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
