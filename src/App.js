import './App.css';
import {BrowserRouter as Router,Switch , Link, Route} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import {useSelector} from 'react-redux';
import { selectUserName } from './features/user/userSlice';
import Detail from './components/Detail';
function App() {

  const username = useSelector(selectUserName);
  
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
              <Route exact path="/"><Login/></Route>
              <Route path="/home"><Home/></Route>
              <Route path='/detail/:id'>
                    <Detail/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
