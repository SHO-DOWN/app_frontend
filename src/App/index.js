import React, { Fragment, lazy, Suspense } from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

const routes = [
  {
    path: "/",
    exact: true,
    Component: lazy(() => import("./Screens/Home/index")),
  },
  {
    path: "/login",
    exact: true,
    Component: lazy(() => import("./Screens/Login/index")),
  },
  {
    path: "/signup",
    exact: true,
    Component: lazy(() => import("./Screens/Signup/index")),
  },
];

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet titleTemplate="Serwish | %s" title="Title" />
        <Route exact path="/home" render={() => <Redirect to="/" />} />
        {routes.map(({ path, Component, exact }) => (
          <Route
            path={path}
            key={path}
            exact={exact}
            render={() => {
              return (
                <Suspense fallback={null}>
                  <Component />
                </Suspense>
              );
            }}
          />
        ))}

      </Fragment>
    );
  }
}

export default withRouter(App);
