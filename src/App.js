
import './App.css';
import Register from './components/register/register';
import Signin from './components/login/login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
     <Route exact path="/" component={Signin} />
     <Route path="/register" component={Register} />
</Switch>
    </div>
    </Router>
  );
}

export default App;
