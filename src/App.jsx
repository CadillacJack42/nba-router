import { Switch, Route } from 'react-router-dom';
import { ProvideData } from './context/DataProvider';
import { Home } from './views/Home';
import styles from './App.css';
export default function App() {
  return (
    <>
      <ProvideData>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ProvideData>
    </>
  );
}
