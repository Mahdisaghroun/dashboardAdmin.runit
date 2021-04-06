import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './scss/style.scss';
import axios from 'axios';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

class App extends Component {
  async componentDidMount() {

    const data = JSON.stringify({ "username": "HoussemSaidani", "password": "123456" });
    var config = {
      method: 'get',
      url: 'http://192.168.1.21:8080/login',
      data: data,
      headers: {


        'Content-Type': 'application/json'
      },

    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.status));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <PrivateRoute path="/" name="Home" component={TheLayout} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
      true ?
        <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
};