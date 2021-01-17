import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './helper/PrivateRoute';
import './App.scss';
import Loading from './loading';
// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const LimitedLogin = React.lazy(() => import('./views/Pages/Users/LimitedLogin'));
const Verification = React.lazy(() => import('./views/Pages/Users/Verification'));

function App() {

  return (
    <>
      <Router>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/register" name="Register New Merchant" render={props => <Register {...props}/>} />
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
            <Route exact path="/user/:verification?:tokenverify" name="Verification" render={props => <Verification {...props}/>} />
            <Route exact path="/403" name="Page 403" render={props => <Page500 {...props}/>} />
            <Route exact path="/locked" name="Maximal Login Attempt" render={props => <LimitedLogin {...props} />} />
            <Route exact path="/loading" component={Loading} />
            <PrivateRoute path="/" name="Home" component={DefaultLayout} />
            <Route component={Page404} />
          </Switch>
        </React.Suspense>
    </Router>
  </>
  );
}

export default App;
