
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AdminPrivateRoute from './AdminPrivateRoute';
import "./App.css";
import Login from './Components/auth/Login';
import AuthProvider from "./Context/AuthProvider/AuthProvider";
const userInfo = localStorage.getItem('user')
const userData = (JSON.parse(userInfo))

function App() {

  return (
    <div>
      <AuthProvider>
     
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                {localStorage.getItem("token") ? <Redirect to={userData?.role === 3 ? "/admin/dashboard" : "/merchant/dashboard"} /> : <Login />}
              </Route>
              {/*   <Route exact path="/register">
              {localStorage.getItem("token") ? <Redirect to={userData.role === 1 ? "/admin/dashboard" : "/merchant/dashboard"} /> : <Register />}
            </Route> */}
              <Route exact path="/login">
                {localStorage.getItem("token") ? <Redirect to={userData?.role === 3 ? "/admin/dashboard" : "/merchant/dashboard"} /> : <Login />}
              </Route>
              <AdminPrivateRoute path="/" name="Admin" />
            </Switch>

            {/*  <Switch>
            <Route exact path="/">
              {localStorage.getItem("token") ? <Redirect to="/admin/dashboard" /> : <Home />}
            </Route>
            <Route exact path="/login">
              {localStorage.getItem("token") ? <Redirect to="/admin/dashboard" /> : <Login />}
            </Route>
            <AdminPrivateRoute path="/" name="Admin" />
            <Route path="/page403" component={Page403} />
            <Route path="/page404" component={Page404} />
          </Switch> */}
          </BrowserRouter>
      
      </AuthProvider>
    </div>
  );
}

export default App;
