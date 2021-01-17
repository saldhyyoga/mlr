import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import Cookie from "js-cookie";
import IdleTimer from "react-idle-timer";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Loading from "../../loading";

import {
  AppAside,
  AppHeader,
  AppFooter,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from "@coreui/react";
import { token } from "../../helper/variable";
import jwt_decode from "jwt-decode";

import { admin, manager } from "../../_nav";
import { adminRoutes, merchantRoutes, operationalRoutes } from "../../routes";
import Page404 from "../../views/Pages/Page404/Page404";

const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

let decodedToken = jwt_decode(token);

class DefaultLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigation: [],
      modal: false,
    };
  }

  loading = () => <Loading />;

  signOut(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }

  render() {
    let navigation = null;
    let routes = null;
    if (decodedToken.group === 1) {
      navigation = admin;
      routes = adminRoutes;
    }
    if (decodedToken.group === 2) {
      navigation = manager;
      routes = manager;
    }
    return (
      <div className="app" style={{ backgroundColor: "#e6e8ed" }}>
        <IdleTimer
          timeout={1000 * 60 * 15}
          onIdle={this.handleOnIdle}
          debounce={250}
        />
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={(e) => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav
                navConfig={navigation}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return window.location.pathname === "/" ? (
                      <Redirect to="/dashboard" key={idx} />
                    ) : null;
                  })}
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => (
                          <route.component key={idx} {...props} />
                        )}
                      />
                    ) : (
                      <Redirect to="/404" key={idx} />
                    );
                  })}
                  {routes.map((route, idx) => {
                    return window.location.pathname !== route.path ? (
                      <>
                        <Route
                          component={Page404}
                          key={idx}
                          render={(props) => (
                            <route.component key={idx} {...props} />
                          )}
                        />
                      </>
                    ) : (
                      <Route path="/" key={idx} />
                    );
                  })}
                  <Redirect from="/" to="dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
