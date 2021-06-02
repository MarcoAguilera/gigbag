import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Explore from './pages/explore/explore.component';
import Header from './component/header/header.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/explore'>
          <Explore />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
