import React, { Suspense } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";

import { Store } from "_common/store";

import style from "./app.module.css";

const Message = React.lazy(() => import("./views/Message/Message"));
const Friends = React.lazy(() => import("./views/friends"));
const AsideMenuBar = React.lazy(
  () => import("@/_common/components/AsideMenuBar/AsideMenuBar")
);

export default function App() {
  return (
    <Suspense fallback={"loading..."}>
      <Store>
        <div className={style.dragBar} />
        <HashRouter>
          <AsideMenuBar />
          <main className={style.main}>
            <Redirect path="/" to="/message" />
            <Switch>
              <Route path="/message" component={Message} />
              <Route path="/friends" component={Friends} />
            </Switch>
          </main>
        </HashRouter>
      </Store>
    </Suspense>
  );
}
