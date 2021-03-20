import React, { Suspense, Fragment } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";

const Message = React.lazy(() => import("./views/message"));
const Friends = React.lazy(() => import("./views/friends"));
const AsideMenuBar = React.lazy(
  () => import("_common/components/AsideMenuBar")
);

export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <AsideMenuBar />
      <HashRouter>
        <Redirect path="/" to="/message" />
        <Switch>
          <Route path="/message" component={Message} />
          <Route path="/friends" component={Friends} />
        </Switch>
      </HashRouter>
    </Suspense>
  );
}
