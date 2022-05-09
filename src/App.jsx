import { Switch, Route } from 'react-router-dom';
import { ProvideData } from './context/DataProvider';
import { Home } from './views/Home';
import { Detail } from './views/Detail';
import { Load } from './views/Load';

export default function App() {
  return (
    <>
      <ProvideData>
        <Switch>
          <Route exact path="/character/:id">
            <Detail />
          </Route>
          <Route exact path="/character">
            <Home />
          </Route>
          <Route exact path="/">
            <Load />
          </Route>
        </Switch>
      </ProvideData>
    </>
  );
}
