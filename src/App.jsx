import { Switch, Route } from 'react-router-dom';
import { ProvideData } from './context/DataProvider';
import { Home } from './views/Home';
export default function App() {
  return (
    <>
      <ProvideData>
        <Switch>
          <Route exact path="/character/:id">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ProvideData>
    </>
  );
}
