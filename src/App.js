import { Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary'
import Front from "./routes/Front";
import PrivateRoute from "./routes/PrivateRoute";
import Main from "./routes/Main";
import { history } from "./_helpers/utilities";

function App() {

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