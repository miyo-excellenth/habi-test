import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from '../pages';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={HomePage} />
        <Route path="*" children={NotFoundPage} />
      </Switch>
    </Router>
  );
}
