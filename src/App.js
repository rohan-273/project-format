import { Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary'
import { createBrowserHistory } from 'history';
import Front from "./routes/Front";
import PrivateRoute from "./PrivateRoute";
import Main from "./routes/Main";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <ErrorBoundary>
        <Switch>
          <PrivateRoute path="/dashboard" component={Main} />
          <Route path="/" component={Front} />
        </Switch>
      </ErrorBoundary>
    </Router>
  )
}

export default App