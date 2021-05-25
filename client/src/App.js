import './App.css';
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import {Switch, Route} from "react-router-dom";
import PotluckForm from "./components/PotluckForm";


function App() {
  return (
    <div>
        <Switch>
            <Route path="/protected">
              <UserPage/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/sign-up">
              <SignUp/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
        </Switch>
        <Route path="/protected/create">
          <PotluckForm/>
        </Route>
      </div>
  );
}

export default App;